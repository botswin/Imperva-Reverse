// @ts-check

import { traverse, types } from '@babel/core';
import { generate } from '@babel/generator';
import parser from '@babel/parser';
import axios from 'axios';
import fs from 'fs/promises';
import { JSDOM } from 'jsdom';
import { deobfuscate } from 'obfuscator-io-deobfuscator';
import { Script } from 'vm';

export function extractIIFEBodyMain(ast) {
    let extractedBody = null;

    traverse(ast, {
        FunctionExpression(path) {
            const functionBody = path.node.body.body;
            console.log(`Found IIFE with ${functionBody.length} statements`);
            extractedBody = types.program(functionBody);
            path.stop();
        },
    });

    if (extractedBody) {
        const generatedCode = generate(extractedBody).code;
        console.log('Successfully extracted IIFE body');
        return {
            ast: extractedBody,
            code: generatedCode,
        };
    } else {
        console.log('No IIFE found in block');
        return null;
    }
}

export function convertComputedToProperty(ast) {
    // Convert computed properties to regular properties
    // For example: p['abc'] = 123 becomes p.abc = 123
    traverse(ast, {
        MemberExpression(path) {
            if (path.node.computed && types.isStringLiteral(path.node.property)) {
                const propName = path.node.property.value;
                if (/^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(propName)) {
                    path.node.computed = false;
                    path.node.property = types.identifier(propName);
                }
            }
        },
    });
}

(async () => {
    const url =
        'https://digital.tarom.ro/Twixt-therers-Alarumen-them-As-true-Macb-Who-mul/lc7liy2RCxEseHlzREV8jswg5r5yKkhGSocYvf_MiCI?s=Vj91moOj';

    /** @type {string} */
    let originalScript = '';
    try {
        const response = await axios.get(url);
        originalScript = response.data;
    } catch (err) {
        console.error('Error fetching the script:', err);
        return;
    }

    const ast = parser.parse(originalScript);

    // Extract the body of the IIFE and execute it in a JSDOM context
    const iifeBodyResult = extractIIFEBodyMain(ast);

    const jsdom = new JSDOM(
        `

    <!doctype html>
    <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </head>
        <body>
        </body>
    </html>

            `,
        {
            runScripts: 'dangerously',
        }
    );

    const script = new Script(iifeBodyResult?.code || '');

    // Execute the IIFE body in jsdom context
    try {
        script.runInContext(jsdom.getInternalVMContext());
    } catch (err) {}

    // run the IIFE body in a JSDOM context
    const { window } = jsdom;

    // substr
    const replacePathes = [];
    traverse(ast, {
        CallExpression(path) {
            const node = path.node;
            if (node.callee.type === 'MemberExpression' && node.callee.property.name === 'substr') {
                const args = node.arguments;
                if (args.length === 2) {
                    const start = args[0].value;
                    const length = args[1].value;
                    const object = node.callee.object;

                    if (object.type === 'Identifier') {
                        const value = window[object.name];
                        if (typeof value === 'string') {
                            const result = value.substr(start, length);
                            replacePathes.push({
                                path,
                                replacement: result,
                            });
                        }
                    }
                }
            }
        },
    });

    replacePathes.forEach((elem) => {
        const { path, replacement } = elem;
        path.replaceWith(types.stringLiteral(replacement));
    });

    // Convert computed properties to regular properties
    convertComputedToProperty(ast);

    window.close();

    // generate the modified script from the AST
    const modifiedScript = generate(ast, { retainLines: false }).code;

    // const modifiedDeobfScript = deobfuscate(modifiedScript);

    const deobfedScript = deobfuscate(modifiedScript, {
        objectSimplification: { isEnabled: true },
        objectPacking: { isEnabled: true },
        proxyFunctionInlining: { isEnabled: true },
        stringRevealing: { isEnabled: true },
        expressionSimplification: { isEnabled: true },
        constantPropagation: { isEnabled: true },
        reassignmentRemoval: { isEnabled: true },
        sequenceSplitting: { isEnabled: true },
        controlFlowRecovery: { isEnabled: true },
        deadBranchRemoval: { isEnabled: false },
        antiTamperRemoval: { isEnabled: true },
        unusedVariableRemoval: { isEnabled: true },
        propertySimplification: { isEnabled: true },
    });

    // Save the modified script to a file
    const outputPath = `./${url.split('/').pop()}.transformed.js`;
    const prettier = await import('prettier');
    const prettierConfig = await prettier.resolveConfig(outputPath);
    const formatted = await prettier.format(deobfedScript, {
        ...prettierConfig,
        filepath: outputPath,
    });
    await fs.writeFile(outputPath, formatted, 'utf-8');

    await fs.writeFile(`./${url.split('/').pop()}.original.js`, originalScript, 'utf-8');
})();
