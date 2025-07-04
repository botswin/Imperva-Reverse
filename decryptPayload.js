// @ts-check

const payload = {
    solution: {
        interrogation: {
            p: '',
            st: 1751349794,
            sr: 3689913497,
            cr: 786676004,
            og: 2,
        },
        version: 'stable',
    },
    old_token: null,
    error: null,
    performance: { interrogation: 126 },
};

function sD(zl, Sw) {
    var U_ = zl;
    var ME = Sw;
    return function () {
        var AU = U_;
        AU ^= AU << 23;
        var kg = ME;
        AU ^= AU >> 17;
        AU ^= kg;
        AU ^= kg >> 26;
        U_ = kg;
        ME = AU;
        return (U_ + ME) % 4294967296;
    };
}

function base64ToBytes(b64) {
    if (typeof Buffer !== 'undefined' && Buffer.from) {
        return Array.from(Buffer.from(b64, 'base64'));
    }
    const bin = atob(b64);
    const bytes = new Array(bin.length);
    for (let i = 0; i < bin.length; i++) {
        bytes[i] = bin.charCodeAt(i);
    }
    return bytes;
}

function decryptPayload(encryptedBase64, seed1, kR) {
    let u = seed1 | 0;
    let v = kR | 0;
    function next() {
        let x = u;
        x ^= x << 23;
        x ^= x >> 17;
        x ^= v;
        x ^= v >> 26;
        const newU = v | 0;
        const newV = x | 0;
        u = newU;
        v = newV;
        return (u + v) >>> 0;
    }

    const m1v = [next() & 0xff, next() & 0xff, next() & 0xff];
    const HYe = (m1v[0] % 7) + 1;
    const Yr = (m1v[1] % 7) + 1;

    const Vx = base64ToBytes(encryptedBase64);
    const Qq = Vx.map((b) => ((b >>> Yr) | (b << (8 - Yr))) & 0xff);
    const afterRotate = Qq.map((b) => ((b >>> HYe) | (b << (8 - HYe))) & 0xff);
    const XL = afterRotate.reverse();
    const str = String.fromCharCode(...XL);
    return JSON.parse(str);
}

const decryptedPayload = decryptPayload(
    payload.solution.interrogation.p,
    1740574759,
    payload.solution.interrogation.cr
);

decryptedPayload['SxN(']['sytzK!uje[ubq/or'] = decryptedPayload['SxN(']['sytzK!uje[ubq/or'].map((item) => {
    function decrypt(str, kR) {
        var nO = sD(1650762707, kR);
        var Kv = [];
        var sx = 0;
        while (sx < 26) {
            Kv.push(nO() & 255);
            sx += 1;
        }

        var YY = Buffer.from(str, 'base64')
            .toString('binary')
            .split('')
            .map((c) => c.charCodeAt(0));

        var P9 = [];
        var JD = 113;
        var Zz = 0;
        var qy = Kv.slice(2, 25).length;
        while (Zz < YY.length) {
            var Gr = YY[Zz];
            var iI = Kv.slice(2, 25)[Zz % qy];
            var QL = Gr ^ iI ^ JD;
            P9.push(QL);
            JD = Gr;
            Zz += 1;
        }

        var j_ = P9.slice();
        var Nx = j_.length;
        var HU = [];
        var no = 0;
        while (no < Nx) {
            var idx = (no - Kv[1]) % Nx;
            if (idx < 0) idx += Nx;
            HU.push(j_[idx]);
            no += 1;
        }

        var DX = HU.slice();
        var wN = DX.length;
        var originalDX = [];
        var RO = 0;
        while (RO < wN) {
            var idx = (RO - Kv[0]) % wN;
            if (idx < 0) idx += wN;
            originalDX.push(DX[idx]);
            RO += 1;
        }

        var hJ = String.fromCharCode.apply(null, originalDX);

        var Lf = hJ.replace(/\\u([0-9a-fA-F]{4})/g, function (match, p1) {
            return String.fromCharCode(parseInt(p1, 16));
        });

        return JSON.parse(Lf);
    }

    return decrypt(item, payload.solution.interrogation.cr);
});

decryptedPayload['SxN(']['K_ObQxtzCys(+iN(oxur'] = decryptedPayload['SxN(']['K_ObQxtzCys(+iN(oxur'].map((item) => {
    function decrypt2(str, kR) {
        var BJ = sD(8280770, kR);
        var Lx = [];
        var zZ = 0;
        while (zZ < 25) {
            Lx.push(BJ() & 255);
            zZ += 1;
        }

        var T3 = Buffer.from(str, 'base64')
            .toString('binary')
            .split('')
            .map((c) => c.charCodeAt(0));

        var h9 = T3.slice();
        var ye = h9.length;
        var el = [];
        var om = 0;
        while (om < ye) {
            var idx = (om - Lx[23]) % ye;
            if (idx < 0) idx += ye;
            el.push(h9[idx]);
            om += 1;
        }

        var Kk = el.length;
        var YT = 0;
        while (YT + 1 < Kk) {
            var F_ = el[YT];
            el[YT] = el[YT + 1];
            el[YT + 1] = F_;
            YT += 2;
        }

        var fo = el.slice();
        var cT = fo.length;
        var Vv = (Lx[22] % 7) + 1;
        var yO = [];
        var Ds = 0;
        while (Ds < cT) {
            yO.push(((fo[Ds] >> Vv) | (fo[Ds] << (8 - Vv))) & 255);
            Ds += 1;
        }

        var L1 = yO.length;
        var Oa = Lx.slice(0, 22).length;
        var Ux = [];
        var Of = 0;
        while (Of < L1) {
            var encrypted = yO[Of];
            var XH = Lx.slice(0, 22)[Of % Oa] & 127;
            var decrypted = encrypted ^ 128;
            var T7 = (decrypted - XH + 256) % 256;
            Ux.push(T7);
            Of += 1;
        }

        var YH = String.fromCharCode.apply(null, Ux);

        var gQ = YH.replace(/\\u([0-9a-fA-F]{4})/g, function (match, p1) {
            return String.fromCharCode(parseInt(p1, 16));
        });

        return JSON.parse(gQ);
    }

    return decrypt2(item, payload.solution.interrogation.cr);
});

decryptedPayload['g[ujowsrow=='] = ((item) => {
    function decrypt3(str, kR) {
        var FO = sD(2328399149, kR);
        var cM = [];
        var aq = 0;
        while (aq < 79) {
            cM.push(FO() & 255);
            aq += 1;
        }

        var D2 = Buffer.from(str, 'base64')
            .toString('binary')
            .split('')
            .map((c) => c.charCodeAt(0));

        var Ys = D2.slice();
        var rJ = Ys.length;
        var HN = cM.slice(49, 78).length;
        var JR = [];
        var nm = 113;
        var FU = 0;
        while (FU < rJ) {
            var Gh = Ys[FU];
            var VW = cM.slice(49, 78)[FU % HN];
            var sA = Gh ^ VW ^ nm;
            JR.push(sA);
            nm = Gh;
            FU += 1;
        }

        var xR = JR.length;
        var im = cM.slice(28, 49).length;
        var Ic = [];
        var YE = 113;
        var jj = 0;
        while (jj < xR) {
            var zt = JR[jj];
            var sH = cM.slice(28, 49)[jj % im];
            var bB = zt ^ sH ^ YE;
            Ic.push(bB);
            YE = zt;
            jj += 1;
        }

        var Vp = Ic.length;
        var Ue = cM.slice(1, 28).length;
        var YQ = [];
        var ee = 0;
        while (ee < Vp) {
            var encrypted = Ic[ee];
            var eV = cM.slice(1, 28)[ee % Ue] & 127;
            var decrypted = encrypted ^ 128;
            var dd = (decrypted - eV + 256) % 256;
            YQ.push(dd);
            ee += 1;
        }

        var Ma = YQ.length;
        var TJ = (cM[0] % 7) + 1;
        var re = [];
        var vb = 0;
        while (vb < Ma) {
            re.push(((YQ[vb] >> TJ) | (YQ[vb] << (8 - TJ))) & 255);
            vb += 1;
        }

        var lH = String.fromCharCode.apply(null, re);

        var st = lH.replace(/\\u([0-9a-fA-F]{4})/g, function (match, p1) {
            return String.fromCharCode(parseInt(p1, 16));
        });

        return JSON.parse(st);
    }

    return decrypt3(item, payload.solution.interrogation.cr);
})(decryptedPayload['g[ujowsrow==']);

decryptedPayload['Y/oLe/ojS-MraxubS!Ojgw=='] = ((item) => {
    function decrypt4(str, kR) {
        var O0 = sD(3633092690, kR);
        var v1 = [];
        var hm = 0;
        while (hm < 3) {
            v1.push(O0() & 255);
            hm += 1;
        }

        var PJ = Buffer.from(str, 'base64')
            .toString('binary')
            .split('')
            .map((c) => c.charCodeAt(0));

        var uw = PJ.slice();
        var Dt = uw.length;
        var o2 = (v1[1] % 7) + 1;
        var lY = [];
        var mg = 0;
        while (mg < Dt) {
            lY.push(((uw[mg] >> o2) | (uw[mg] << (8 - o2))) & 255);
            mg += 1;
        }

        var Mh = lY.length;
        var Wx = [];
        var Eu = 0;
        while (Eu < Mh) {
            var idx = (Eu - v1[0]) % Mh;
            if (idx < 0) idx += Mh;
            Wx.push(lY[idx]);
            Eu += 1;
        }

        var UI = String.fromCharCode.apply(null, Wx);

        var dC = UI.replace(/\\u([0-9a-fA-F]{4})/g, function (match, p1) {
            return String.fromCharCode(parseInt(p1, 16));
        });

        return JSON.parse(dC);
    }

    return decrypt4(item, payload.solution.interrogation.cr);
})(decryptedPayload['Y/oLe/ojS-MraxubS!Ojgw==']);

decryptedPayload['o&Mbm_uTo,NL+qNzkyt(kws(S-Nzexv-q&s='] = ((item) => {
    function decrypt5(str, kR) {
        var z5 = sD(936215363, kR);
        var US = [];
        var dE = 0;
        while (dE < 58) {
            US.push(z5() & 255);
            dE += 1;
        }

        var Zo = Buffer.from(str, 'base64')
            .toString('binary')
            .split('')
            .map((c) => c.charCodeAt(0));

        var rc = Zo.slice();
        var Yz = rc.length;
        var SK = US.slice(30, 57).length;
        var Xo = [];
        var bx = 0;
        while (bx < Yz) {
            var encrypted = rc[bx];
            var e8 = US.slice(30, 57)[bx % SK] & 127;
            var decrypted = encrypted ^ 128;
            var Ps = (decrypted - e8 + 256) % 256;
            Xo.push(Ps);
            bx += 1;
        }

        var sF = Xo.length / 2;
        var Vh = US.slice(0, 30).length;
        var kk = [];
        var Uu = 0;
        while (Uu < sF) {
            kk.push(Xo[Uu * 2]);
            Uu += 1;
        }

        var H4 = String.fromCharCode.apply(null, kk);

        var l5 = H4.replace(/\\u([0-9a-fA-F]{4})/g, function (match, p1) {
            return String.fromCharCode(parseInt(p1, 16));
        });

        return JSON.parse(l5);
    }

    return decrypt5(item, payload.solution.interrogation.cr);
})(decryptedPayload['o&Mbm_uTo,NL+qNzkyt(kws(S-Nzexv-q&s=']);

decryptedPayload['G!tLk-ODY/oLe/ojextzq-M='] = ((item) => {
    function decrypt6(str, kR) {
        var W3 = sD(2069598282, kR);
        var s7 = [];
        var nd = 0;
        while (nd < 43) {
            s7.push(W3() & 255);
            nd += 1;
        }

        var xV = Buffer.from(str, 'base64')
            .toString('binary')
            .split('')
            .map((c) => c.charCodeAt(0));

        var yF = xV.slice();
        var tJ = yF.length;
        var Hs = s7.slice(17, 42).length;
        var QX = [];
        var vD = 113;
        var lJ = 0;
        while (lJ < tJ) {
            var rF = yF[lJ];
            var dr = s7.slice(17, 42)[lJ % Hs];
            var wq = rF ^ dr ^ vD;
            QX.push(wq);
            vD = rF;
            lJ += 1;
        }

        var Ea = QX.length / 2;
        var zF = s7.slice(0, 17).length;
        var nJ = [];
        var CA = 0;
        while (CA < Ea) {
            nJ.push(QX[CA * 2]);
            CA += 1;
        }

        var jp = nJ.length;
        var Tm = 0;
        while (Tm + 1 < jp) {
            var vQ = nJ[Tm];
            nJ[Tm] = nJ[Tm + 1];
            nJ[Tm + 1] = vQ;
            Tm += 2;
        }

        var da = nJ.slice();

        var h0 = String.fromCharCode.apply(null, da);

        var ko = h0.replace(/\\u([0-9a-fA-F]{4})/g, function (match, p1) {
            return String.fromCharCode(parseInt(p1, 16));
        });

        return JSON.parse(ko);
    }

    return decrypt6(item, payload.solution.interrogation.cr);
})(decryptedPayload['G!tLk-ODY/oLe/ojextzq-M=']);

decryptedPayload['G/pjCxNjGwubW[M(E&tjCw=='] = ((item) => {
    function decrypt7(str, kR) {
        var T1 = sD(107488850, kR);
        var QU = [];
        var tY = 0;
        while (tY < 41) {
            QU.push(T1() & 255);
            tY += 1;
        }

        var AK = Buffer.from(str, 'base64')
            .toString('binary')
            .split('')
            .map((c) => c.charCodeAt(0));

        var mf = AK.slice();
        var J6 = mf.length;
        var KI = QU.slice(19, 40).length;
        var dO = [];
        var nF = 0;
        while (nF < J6) {
            var encrypted = mf[nF];
            var OS = QU.slice(19, 40)[nF % KI] & 127;
            var decrypted = encrypted ^ 128;
            var Im = (decrypted - OS + 256) % 256;
            dO.push(Im);
            nF += 1;
        }

        var ZC = dO.length;
        var n_ = QU.slice(0, 19).length;
        var K4 = [];
        var k8 = 0;
        while (k8 < ZC) {
            var encrypted = dO[k8];
            var xU = QU.slice(0, 19)[k8 % n_] & 127;
            var decrypted = encrypted ^ 128;
            var eA = (decrypted - xU + 256) % 256;
            K4.push(eA);
            k8 += 1;
        }

        var xJ = String.fromCharCode.apply(null, K4);

        var nx = xJ.replace(/\\u([0-9a-fA-F]{4})/g, function (match, p1) {
            return String.fromCharCode(parseInt(p1, 16));
        });

        return JSON.parse(nx);
    }

    return decrypt7(item, payload.solution.interrogation.cr);
})(decryptedPayload['G/pjCxNjGwubW[M(E&tjCw==']);

decryptedPayload['+qNLoytrqxuTk&Mr'] = ((item) => {
    function decrypt8(str, kR) {
        var Tz = sD(3591488435, kR);
        var zM = [];
        var ki = 0;
        while (ki < 21) {
            zM.push(Tz() & 255);
            ki += 1;
        }

        var vT = Buffer.from(str, 'base64')
            .toString('binary')
            .split('')
            .map((c) => c.charCodeAt(0));

        var yy = vT.slice();
        var LY = yy.length;
        var kJ = zM.slice(1, 20).length;
        var gK = [];
        var cz = 113;
        var z4 = 0;
        while (z4 < LY) {
            var nZ = yy[z4];
            var vM = zM.slice(1, 20)[z4 % kJ];
            var TL = nZ ^ vM ^ cz;
            gK.push(TL);
            cz = nZ;
            z4 += 1;
        }

        var pT = gK.length;
        var xM = [];
        var PD = 0;
        while (PD < pT) {
            var idx = (PD - zM[0]) % pT;
            if (idx < 0) idx += pT;
            xM.push(gK[idx]);
            PD += 1;
        }

        var En = String.fromCharCode.apply(null, xM);

        var yx = En.replace(/\\u([0-9a-fA-F]{4})/g, function (match, p1) {
            return String.fromCharCode(parseInt(p1, 16));
        });

        var sw = JSON.parse(yx);
        var result = {};

        for (var key in sw) {
            if (sw.hasOwnProperty(key)) {
                var encryptedValue = sw[key];
                var decryptedValue;

                if (key === 'K-MLIw==') {
                    var UU = sD(4293051610, kR);
                    var ys = [];
                    var v7 = 0;
                    while (v7 < 60) {
                        ys.push(UU() & 255);
                        v7 += 1;
                    }

                    var GX = Buffer.from(encryptedValue, 'base64')
                        .toString('binary')
                        .split('')
                        .map((c) => c.charCodeAt(0));
                    var BG = GX.length / 2;
                    var Hq = ys.slice(28, 59).length;
                    var I_ = [];
                    var Tu = 0;
                    while (Tu < BG) {
                        I_.push(GX[Tu * 2]);
                        Tu += 1;
                    }

                    var RK = I_.length;
                    var AZ = ys.slice(1, 28).length;
                    var ri = [];
                    var xI = 113;
                    var w5 = 0;
                    while (w5 < RK) {
                        var F5 = I_[w5];
                        var OZ = ys.slice(1, 28)[w5 % AZ];
                        var YI = F5 ^ OZ ^ xI;
                        ri.push(YI);
                        xI = F5;
                        w5 += 1;
                    }

                    var Cy = ri.length;
                    var ov = (ys[0] % 7) + 1;
                    var LK = [];
                    var ZT = 0;
                    while (ZT < Cy) {
                        LK.push(((ri[ZT] >> ov) | (ri[ZT] << (8 - ov))) & 255);
                        ZT += 1;
                    }

                    var jK = String.fromCharCode.apply(null, LK);
                    var Xs = jK.replace(/\\u([0-9a-fA-F]{4})/g, function (match, p1) {
                        return String.fromCharCode(parseInt(p1, 16));
                    });
                    decryptedValue = JSON.parse(Xs);
                } else if (key === 'K[NLMw==') {
                    var b_ = sD(1624825960, kR);
                    var Eg = [];
                    var tI = 0;
                    while (tI < 2) {
                        Eg.push(b_() & 255);
                        tI += 1;
                    }

                    var eq = Buffer.from(encryptedValue, 'base64')
                        .toString('binary')
                        .split('')
                        .map((c) => c.charCodeAt(0));
                    var Cp = eq.length;
                    var Vg = [];
                    var yB = Cp - 1;
                    while (yB >= 0) {
                        Vg.push(eq[yB]);
                        yB -= 1;
                    }

                    var gD = Vg.length;
                    var xv = (Eg[0] % 7) + 1;
                    var Zg = [];
                    var xr = 0;
                    while (xr < gD) {
                        Zg.push(((Vg[xr] >> xv) | (Vg[xr] << (8 - xv))) & 255);
                        xr += 1;
                    }

                    var yP = String.fromCharCode.apply(null, Zg);
                    var Ci = yP.replace(/\\u([0-9a-fA-F]{4})/g, function (match, p1) {
                        return String.fromCharCode(parseInt(p1, 16));
                    });
                    decryptedValue = JSON.parse(Ci);
                } else if (key === 'k!N(C[sbcysrgzM=') {
                    var pp = sD(2781904740, kR);
                    var Yv = [];
                    var Ns = 0;
                    while (Ns < 30) {
                        Yv.push(pp() & 255);
                        Ns += 1;
                    }

                    var Ej = Buffer.from(encryptedValue, 'base64')
                        .toString('binary')
                        .split('')
                        .map((c) => c.charCodeAt(0));
                    var Ks = Ej.length;
                    var Xl = Yv.slice(0, 29).length;
                    var lu = [];
                    var BI = 0;
                    while (BI < Ks) {
                        var encrypted = Ej[BI];
                        var tz = Yv.slice(0, 29)[BI % Xl] & 127;
                        var decrypted = encrypted ^ 128;
                        var zR = (decrypted - tz + 256) % 256;
                        lu.push(zR);
                        BI += 1;
                    }

                    var yf = lu.length;
                    var mT = [];
                    var xm = yf - 1;
                    while (xm >= 0) {
                        mT.push(lu[xm]);
                        xm -= 1;
                    }

                    var Zr = String.fromCharCode.apply(null, mT);
                    var Og = Zr.replace(/\\u([0-9a-fA-F]{4})/g, function (match, p1) {
                        return String.fromCharCode(parseInt(p1, 16));
                    });
                    decryptedValue = JSON.parse(Og);
                } else if (key === 'K&NLoytrS[M=') {
                    var G3 = sD(3391494669, kR);
                    var Qz = [];
                    var Pd = 0;
                    while (Pd < 23) {
                        Qz.push(G3() & 255);
                        Pd += 1;
                    }

                    var SX = Buffer.from(encryptedValue, 'base64')
                        .toString('binary')
                        .split('')
                        .map((c) => c.charCodeAt(0));
                    var MH = SX.length;
                    var FZ = [];
                    var u6 = 0;
                    while (u6 < MH) {
                        var idx = (u6 - Qz[21]) % MH;
                        if (idx < 0) idx += MH;
                        FZ.push(SX[idx]);
                        u6 += 1;
                    }

                    var Mv = FZ.length;
                    var GZ = [];
                    var mB = 0;
                    while (mB < Mv) {
                        var idx = (mB - Qz[20]) % Mv;
                        if (idx < 0) idx += Mv;
                        GZ.push(FZ[idx]);
                        mB += 1;
                    }

                    var C5 = GZ.length;
                    var xx = Qz.slice(0, 20).length;
                    var iT = [];
                    var er = 0;
                    while (er < C5) {
                        var encrypted = GZ[er];
                        var ek = Qz.slice(0, 20)[er % xx] & 127;
                        var decrypted = encrypted ^ 128;
                        var Tv = (decrypted - ek + 256) % 256;
                        iT.push(Tv);
                        er += 1;
                    }

                    var vx = String.fromCharCode.apply(null, iT);
                    var D8 = vx.replace(/\\u([0-9a-fA-F]{4})/g, function (match, p1) {
                        return String.fromCharCode(parseInt(p1, 16));
                    });
                    decryptedValue = JSON.parse(D8);
                } else if (key === 'S-Nze!v-C-OjkwtzS(MLOw==') {
                    var nL = sD(1887139459, kR);
                    var ab = [];
                    var pr = 0;
                    while (pr < 33) {
                        ab.push(nL() & 255);
                        pr += 1;
                    }

                    var Wi = Buffer.from(encryptedValue, 'base64')
                        .toString('binary')
                        .split('')
                        .map((c) => c.charCodeAt(0));
                    var GM = Wi.length / 2;
                    var m3 = ab.slice(1, 32).length;
                    var m8 = [];
                    var hT = 0;
                    while (hT < GM) {
                        m8.push(Wi[hT * 2]);
                        hT += 1;
                    }

                    var kt = m8.length;
                    var Lq = (ab[0] % 7) + 1;
                    var LZ = [];
                    var nX = 0;
                    while (nX < kt) {
                        LZ.push(((m8[nX] >> Lq) | (m8[nX] << (8 - Lq))) & 255);
                        nX += 1;
                    }

                    var AF = String.fromCharCode.apply(null, LZ);
                    var Lv = AF.replace(/\\u([0-9a-fA-F]{4})/g, function (match, p1) {
                        return String.fromCharCode(parseInt(p1, 16));
                    });
                    decryptedValue = JSON.parse(Lv);
                }

                result[key] = decryptedValue;
            }
        }

        return result;
    }

    return decrypt8(item, payload.solution.interrogation.cr);
})(decryptedPayload['+qNLoytrqxuTk&Mr']);

decryptedPayload['S(MLO&uj+pNLaytro/qDy!srC&M='] = ((item) => {
    function decrypt9(str, kR) {
        var t7 = sD(3736749910, kR);
        var xF = [];
        var Ms = 0;
        while (Ms < 42) {
            xF.push(t7() & 255);
            Ms += 1;
        }

        var Zv = Buffer.from(str, 'base64')
            .toString('binary')
            .split('')
            .map((c) => c.charCodeAt(0));

        var id = Zv.length;
        var nj = [];
        var A2 = 0;
        while (A2 < id) {
            var idx = (A2 - xF[40]) % id;
            if (idx < 0) idx += id;
            nj.push(Zv[idx]);
            A2 += 1;
        }

        var ym = nj.length;
        var PC = xF.slice(17, 40).length;
        var WU = [];
        var RC = 0;
        while (RC < ym) {
            var encrypted = nj[RC];
            var Cd = xF.slice(17, 40)[RC % PC] & 127;
            var decrypted = encrypted ^ 128;
            var M8 = (decrypted - Cd + 256) % 256;
            WU.push(M8);
            RC += 1;
        }

        var va = WU.length / 2;
        var ck = xF.slice(0, 17).length;
        var Mt = [];
        var JZ = 0;
        while (JZ < va) {
            Mt.push(WU[JZ * 2]);
            JZ += 1;
        }

        var zp = String.fromCharCode.apply(null, Mt);

        var sV = zp.replace(/\\u([0-9a-fA-F]{4})/g, function (match, p1) {
            return String.fromCharCode(parseInt(p1, 16));
        });

        var Bk = JSON.parse(sV);
        var result = [];

        for (var i = 0; i < Bk.length; i++) {
            var item = Bk[i];
            var key = item[0];
            var encryptedValue = item[1];

            var JB = sD(3736749910, kR);
            var iw = [];
            var c3 = 0;
            while (c3 < 42) {
                iw.push(JB() & 255);
                c3 += 1;
            }

            var NG = Buffer.from(encryptedValue, 'base64')
                .toString('binary')
                .split('')
                .map((c) => c.charCodeAt(0));

            var lQ = NG.length;
            var rZ = [];
            var E6 = 0;
            while (E6 < lQ) {
                var idx = (E6 - iw[40]) % lQ;
                if (idx < 0) idx += lQ;
                rZ.push(NG[idx]);
                E6 += 1;
            }

            var as = rZ.length;
            var PK = iw.slice(17, 40).length;
            var dH = [];
            var wG = 0;
            while (wG < as) {
                var encrypted = rZ[wG];
                var Nk = iw.slice(17, 40)[wG % PK] & 127;
                var decrypted = encrypted ^ 128;
                var aV = (decrypted - Nk + 256) % 256;
                dH.push(aV);
                wG += 1;
            }

            var Sk = dH.length / 2;
            var EH = iw.slice(0, 17).length;
            var U9 = [];
            var YW = 0;
            while (YW < Sk) {
                U9.push(dH[YW * 2]);
                YW += 1;
            }

            var sn = String.fromCharCode.apply(null, U9);

            var gM = sn.replace(/\\u([0-9a-fA-F]{4})/g, function (match, p1) {
                return String.fromCharCode(parseInt(p1, 16));
            });

            var pU = JSON.parse(gM);
            result.push([key, pU]);
        }

        return result;
    }

    return decrypt9(item, payload.solution.interrogation.cr);
})(decryptedPayload['S(MLO&uj+pNLaytro/qDy!srC&M=']);

decryptedPayload['G!srk&Mr'] = ((item) => {
    function decrypt10(str, kR) {
        var Fn = sD(612538604, kR);
        var Bp = [];
        var IX = 0;
        while (IX < 32) {
            Bp.push(Fn() & 255);
            IX += 1;
        }

        var uI = Buffer.from(str, 'base64')
            .toString('binary')
            .split('')
            .map((c) => c.charCodeAt(0));

        var Yb = uI.length;
        var hA = (Bp[30] % 7) + 1;
        var FN = [];
        var IE = 0;
        while (IE < Yb) {
            FN.push(((uI[IE] >> hA) | (uI[IE] << (8 - hA))) & 255);
            IE += 1;
        }

        var u8 = FN.length;
        var TR = [];
        var rM = 0;
        while (rM < u8) {
            var idx = (rM - Bp[29]) % u8;
            if (idx < 0) idx += u8;
            TR.push(FN[idx]);
            rM += 1;
        }

        var vp = TR.length;
        var MZ = (Bp[28] % 7) + 1;
        var tl = [];
        var Cn = 0;
        while (Cn < vp) {
            tl.push(((TR[Cn] >> MZ) | (TR[Cn] << (8 - MZ))) & 255);
            Cn += 1;
        }

        var As = tl.length;
        var c_ = Bp.slice(0, 28).length;
        var Mx = [];
        var Lp = 113;
        var ce = 0;
        while (ce < As) {
            var W0 = tl[ce];
            var t3 = Bp.slice(0, 28)[ce % c_];
            var kI = W0 ^ t3 ^ Lp;
            Mx.push(kI);
            Lp = W0;
            ce += 1;
        }

        var kq = String.fromCharCode.apply(null, Mx);

        var Gb = kq.replace(/\\u([0-9a-fA-F]{4})/g, function (match, p1) {
            return String.fromCharCode(parseInt(p1, 16));
        });

        return JSON.parse(Gb);
    }

    return decrypt10(item, payload.solution.interrogation.cr);
})(decryptedPayload['G!srk&Mr']);

decryptedPayload['m_P-mwsrQ!sLu[s='] = ((item) => {
    function decrypt11(str, kR) {
        var m7 = sD(2024888311, kR);
        var I8 = [];
        var IK = 0;
        while (IK < 50) {
            I8.push(m7() & 255);
            IK += 1;
        }

        var Mi = Buffer.from(str, 'base64')
            .toString('binary')
            .split('')
            .map((c) => c.charCodeAt(0));

        var dM = Mi.slice();
        var Wd = dM.length;
        var SZ = 0;
        while (SZ + 1 < Wd) {
            var RZ = dM[SZ];
            dM[SZ] = dM[SZ + 1];
            dM[SZ + 1] = RZ;
            SZ += 2;
        }

        var F1 = dM.length;
        var eg = [];
        var Jn = 0;
        while (Jn < F1) {
            var idx = (Jn - I8[48]) % F1;
            if (idx < 0) idx += F1;
            eg.push(dM[idx]);
            Jn += 1;
        }

        var CF = eg.length;
        var ir = I8.slice(17, 48).length;
        var o1 = [];
        var qp = 113;
        var AL = 0;
        while (AL < CF) {
            var EI = eg[AL];
            var bJ = I8.slice(17, 48)[AL % ir];
            var lK = EI ^ bJ ^ qp;
            o1.push(lK);
            qp = EI;
            AL += 1;
        }

        var aZ = o1.length;
        var k_ = I8.slice(0, 17).length;
        var wO = [];
        var hw = 113;
        var Vj = 0;
        while (Vj < aZ) {
            var LW = o1[Vj];
            var ct = I8.slice(0, 17)[Vj % k_];
            var M5 = LW ^ ct ^ hw;
            wO.push(M5);
            hw = LW;
            Vj += 1;
        }

        var jq = String.fromCharCode.apply(null, wO);

        var lq = jq.replace(/\\u([0-9a-fA-F]{4})/g, function (match, p1) {
            return String.fromCharCode(parseInt(p1, 16));
        });

        return JSON.parse(lq);
    }

    return decrypt11(item, payload.solution.interrogation.cr);
})(decryptedPayload['m_P-mwsrQ!sLu[s=']);

decryptedPayload['Cxuzc!sL'] = ((item) => {
    function decrypt12(str, kR) {
        var fM = sD(2284030616, kR);
        var yY = [];
        var Cs = 0;
        while (Cs < 42) {
            yY.push(fM() & 255);
            Cs += 1;
        }

        var jF = Buffer.from(str, 'base64')
            .toString('binary')
            .split('')
            .map((c) => c.charCodeAt(0));

        var Cq = jF.length;
        var Bd = [];
        var dk = 0;
        while (dk < Cq) {
            var idx = (dk - yY[40]) % Cq;
            if (idx < 0) idx += Cq;
            Bd.push(jF[idx]);
            dk += 1;
        }

        var ZX = Bd.length;
        var Hd = [];
        var Bh = ZX - 1;
        while (Bh >= 0) {
            Hd.push(Bd[Bh]);
            Bh -= 1;
        }

        var tM = Hd.length;
        var x7 = yY.slice(19, 40).length;
        var rB = [];
        var a2 = 113;
        var pI = 0;
        while (pI < tM) {
            var oh = Hd[pI];
            var J9 = yY.slice(19, 40)[pI % x7];
            var Qg = oh ^ J9 ^ a2;
            rB.push(Qg);
            a2 = oh;
            pI += 1;
        }

        var Kh = rB.length;
        var Us = yY.slice(0, 19).length;
        var CJ = [];
        var Z9 = 0;
        while (Z9 < Kh) {
            var encrypted = rB[Z9];
            var KQ = yY.slice(0, 19)[Z9 % Us] & 127;
            var decrypted = encrypted ^ 128;
            var h5 = (decrypted - KQ + 256) % 256;
            CJ.push(h5);
            Z9 += 1;
        }

        var AV = String.fromCharCode.apply(null, CJ);

        var FS = AV.replace(/\\u([0-9a-fA-F]{4})/g, function (match, p1) {
            return String.fromCharCode(parseInt(p1, 16));
        });

        var Lr = JSON.parse(FS);
        var result = {};

        for (var key in Lr) {
            if (Lr.hasOwnProperty(key)) {
                if (key === 'a_s(') {
                    var encryptedValue = Lr[key];

                    var yZ = sD(638959349, kR);
                    var aD = [];
                    var Au = 0;
                    while (Au < 40) {
                        aD.push(yZ() & 255);
                        Au += 1;
                    }

                    var SB = Buffer.from(encryptedValue, 'base64')
                        .toString('binary')
                        .split('')
                        .map((c) => c.charCodeAt(0));

                    var tK = SB.length;
                    var U1 = 0;
                    while (U1 + 1 < tK) {
                        var mo = SB[U1];
                        SB[U1] = SB[U1 + 1];
                        SB[U1 + 1] = mo;
                        U1 += 2;
                    }

                    var Zj = SB.slice();
                    var L_ = Zj.length;
                    var Rb = aD.slice(20, 39).length;
                    var UA = [];
                    var W8 = 0;
                    while (W8 < L_) {
                        var encrypted = Zj[W8];
                        var tH = aD.slice(20, 39)[W8 % Rb] & 127;
                        var decrypted = encrypted ^ 128;
                        var aw = (decrypted - tH + 256) % 256;
                        UA.push(aw);
                        W8 += 1;
                    }

                    var W5 = UA.length;
                    var yb = aD.slice(0, 20).length;
                    var Hr = [];
                    var gI = 0;
                    while (gI < W5) {
                        var encrypted = UA[gI];
                        var NL = aD.slice(0, 20)[gI % yb] & 127;
                        var decrypted = encrypted ^ 128;
                        var DW = (decrypted - NL + 256) % 256;
                        Hr.push(DW);
                        gI += 1;
                    }

                    var Mu = String.fromCharCode.apply(null, Hr);

                    var lb = Mu.replace(/\\u([0-9a-fA-F]{4})/g, function (match, p1) {
                        return String.fromCharCode(parseInt(p1, 16));
                    });

                    result[key] = JSON.parse(lb);
                } else {
                    result[key] = Lr[key];
                }
            }
        }

        return result;
    }

    return decrypt12(item, payload.solution.interrogation.cr);
})(decryptedPayload['Cxuzc!sL']);

decryptedPayload['K(v-E[M('] = ((item) => {
    function decrypt13(str, kR) {
        var bK = sD(430797680, kR);
        var nC = [];
        var gO = 0;
        while (gO < 3) {
            nC.push(bK() & 255);
            gO += 1;
        }

        var T2 = Buffer.from(str, 'base64')
            .toString('binary')
            .split('')
            .map((c) => c.charCodeAt(0));

        var qx = T2.length;
        var sK = (nC[1] % 7) + 1;
        var Tf = [];
        var f7 = 0;
        while (f7 < qx) {
            Tf.push(((T2[f7] >> sK) | (T2[f7] << (8 - sK))) & 255);
            f7 += 1;
        }

        var ZE = Tf.length;
        var RJ = [];
        var cE = 0;
        while (cE < ZE) {
            var idx = (cE - nC[0]) % ZE;
            if (idx < 0) idx += ZE;
            RJ.push(Tf[idx]);
            cE += 1;
        }

        var nE = String.fromCharCode.apply(null, RJ);

        var N9 = nE.replace(/\\u([0-9a-fA-F]{4})/g, function (match, p1) {
            return String.fromCharCode(parseInt(p1, 16));
        });

        var ou = JSON.parse(N9);
        var result = {};

        for (var key in ou) {
            if (ou.hasOwnProperty(key)) {
                if (key === 'a_s(') {
                    var encryptedValue = ou[key];

                    var tn = sD(4143207636, kR);
                    var u4 = [];
                    var Jd = 0;
                    while (Jd < 27) {
                        u4.push(tn() & 255);
                        Jd += 1;
                    }

                    var cc = Buffer.from(encryptedValue, 'base64')
                        .toString('binary')
                        .split('')
                        .map((c) => c.charCodeAt(0));

                    var DQ = cc.length;
                    var fZ = [];
                    var g6 = 0;
                    while (g6 < DQ) {
                        var idx = (g6 - u4[25]) % DQ;
                        if (idx < 0) idx += DQ;
                        fZ.push(cc[idx]);
                        g6 += 1;
                    }

                    var Ii = fZ.length;
                    var JH = u4.slice(0, 25).length;
                    var J2 = [];
                    var Q7 = 0;
                    while (Q7 < Ii) {
                        var encrypted = fZ[Q7];
                        var GA = u4.slice(0, 25)[Q7 % JH] & 127;
                        var decrypted = encrypted ^ 128;
                        var eo = (decrypted - GA + 256) % 256;
                        J2.push(eo);
                        Q7 += 1;
                    }

                    var cf = J2.length;
                    var DI = 0;
                    while (DI + 1 < cf) {
                        var Ri = J2[DI];
                        J2[DI] = J2[DI + 1];
                        J2[DI + 1] = Ri;
                        DI += 2;
                    }

                    var HW = J2.slice();

                    var tQ = String.fromCharCode.apply(null, HW);

                    var eY = tQ.replace(/\\u([0-9a-fA-F]{4})/g, function (match, p1) {
                        return String.fromCharCode(parseInt(p1, 16));
                    });

                    result[key] = JSON.parse(eY);
                } else {
                    result[key] = ou[key];
                }
            }
        }

        return result;
    }

    return decrypt13(item, payload.solution.interrogation.cr);
})(decryptedPayload['K(v-E[M(']);

decryptedPayload['G-tDe-M='] = ((item) => {
    function decrypt14(str, kR) {
        var so = sD(764395007, kR);
        var hb = [];
        var ms = 0;
        while (ms < 4) {
            hb.push(so() & 255);
            ms += 1;
        }

        var sd = Buffer.from(str, 'base64')
            .toString('binary')
            .split('')
            .map((c) => c.charCodeAt(0));

        var JG = sd.length;
        var RY = [];
        var v0 = 0;
        while (v0 < JG) {
            var idx = (v0 - hb[2]) % JG;
            if (idx < 0) idx += JG;
            RY.push(sd[idx]);
            v0 += 1;
        }

        var HG = RY.length;
        var mx = [];
        var Yl = 0;
        while (Yl < HG) {
            var idx = (Yl - hb[1]) % HG;
            if (idx < 0) idx += HG;
            mx.push(RY[idx]);
            Yl += 1;
        }

        var dD = mx.length;
        var IO = (hb[0] % 7) + 1;
        var mw = [];
        var Pa = 0;
        while (Pa < dD) {
            mw.push(((mx[Pa] >> IO) | (mx[Pa] << (8 - IO))) & 255);
            Pa += 1;
        }

        var Qw = String.fromCharCode.apply(null, mw);
        var oa = Qw.replace(/\\u([0-9a-fA-F]{4})/g, function (match, p1) {
            return String.fromCharCode(parseInt(p1, 16));
        });

        return JSON.parse(oa);
    }

    return decrypt14(item, payload.solution.interrogation.cr);
})(decryptedPayload['G-tDe-M=']);

decryptedPayload['KyN(S(M='] = ((item) => {
    function decrypt15(str, kR) {
        var AO = sD(2514653307, kR);
        var GU = [];
        var c1 = 0;
        while (c1 < 52) {
            GU.push(AO() & 255);
            c1 += 1;
        }

        var UJ = Buffer.from(str, 'base64')
            .toString('binary')
            .split('')
            .map((c) => c.charCodeAt(0));

        var cF = UJ.length;
        var sl = GU.slice(24, 51).length;
        var D1 = [];
        var l8 = 0;
        while (l8 < cF) {
            var encrypted = UJ[l8];
            var W2 = GU.slice(24, 51)[l8 % sl] & 127;
            var decrypted = encrypted ^ 128;
            var Et = (decrypted - W2 + 256) % 256;
            D1.push(Et);
            l8 += 1;
        }

        var tG = D1.length;
        var Pc = [];
        var m6 = 0;
        while (m6 < tG) {
            var idx = (m6 - GU[23]) % tG;
            if (idx < 0) idx += tG;
            Pc.push(D1[idx]);
            m6 += 1;
        }

        var DN = Pc.length;
        var s0 = GU.slice(0, 23).length;
        var XJ = [];
        var Jm = 0;
        while (Jm < DN) {
            var encrypted = Pc[Jm];
            var KZ = GU.slice(0, 23)[Jm % s0] & 127;
            var decrypted = encrypted ^ 128;
            var fY = (decrypted - KZ + 256) % 256;
            XJ.push(fY);
            Jm += 1;
        }

        var ne = XJ.length;
        var qw = 0;
        while (qw + 1 < ne) {
            var NR = XJ[qw];
            XJ[qw] = XJ[qw + 1];
            XJ[qw + 1] = NR;
            qw += 2;
        }

        var AD = XJ.slice();
        var DG = String.fromCharCode.apply(null, AD);
        var EG = DG.replace(/\\u([0-9a-fA-F]{4})/g, function (match, p1) {
            return String.fromCharCode(parseInt(p1, 16));
        });

        return JSON.parse(EG);
    }

    return decrypt15(item, payload.solution.interrogation.cr);
})(decryptedPayload['KyN(S(M=']);

decryptedPayload['SyN(qws='] = ((item) => {
    function decrypt16(str, kR) {
        var d1 = sD(836013910, kR);
        var Ls = [];
        var eR = 0;
        while (eR < 53) {
            Ls.push(d1() & 255);
            eR += 1;
        }

        var ed = Buffer.from(str, 'base64')
            .toString('binary')
            .split('')
            .map((c) => c.charCodeAt(0));

        var B9 = ed.length;
        var S3 = Ls.slice(28, 52).length;
        var L3 = [];
        var AT = 0;
        while (AT < B9) {
            var encrypted = ed[AT];
            var CV = Ls.slice(28, 52)[AT % S3] & 127;
            var decrypted = encrypted ^ 128;
            var l3 = (decrypted - CV + 256) % 256;
            L3.push(l3);
            AT += 1;
        }

        var NP = Math.floor(L3.length / 2);
        var Fw = Ls.slice(1, 28).length;
        var rt = [];
        var rS = 0;
        while (rS < NP) {
            rt.push(L3[rS * 2]);
            rS += 1;
        }

        var lC = rt.length;
        var Ju = 0;
        while (Ju + 1 < lC) {
            var sP = rt[Ju];
            rt[Ju] = rt[Ju + 1];
            rt[Ju + 1] = sP;
            Ju += 2;
        }

        var Jw = rt.slice();
        var td = Jw.length;
        var fN = (Ls[0] % 7) + 1;
        var R3 = [];
        var ap = 0;
        while (ap < td) {
            R3.push(((Jw[ap] >> fN) | (Jw[ap] << (8 - fN))) & 255);
            ap += 1;
        }

        var Se = String.fromCharCode.apply(null, R3);
        var Fk = Se.replace(/\\u([0-9a-fA-F]{4})/g, function (match, p1) {
            return String.fromCharCode(parseInt(p1, 16));
        });

        return JSON.parse(Fk);
    }

    return decrypt16(item, payload.solution.interrogation.cr);
})(decryptedPayload['SyN(qws=']);

decryptedPayload['K!uTkxO(ew=='] = ((item) => {
    function decrypt17(str, kR) {
        var CX = sD(694216168, kR);
        var dS = [];
        var mE = 0;
        while (mE < 46) {
            dS.push(CX() & 255);
            mE += 1;
        }

        var Ew = Buffer.from(str, 'base64')
            .toString('binary')
            .split('')
            .map((c) => c.charCodeAt(0));

        var eH = Ew.length;
        var rp = dS.slice(26, 45).length;
        var vK = [];
        var s5 = 0;
        while (s5 < eH) {
            var encrypted = Ew[s5];
            var tx = dS.slice(26, 45)[s5 % rp] & 127;
            var decrypted = encrypted ^ 128;
            var Qv = (decrypted - tx + 256) % 256;
            vK.push(Qv);
            s5 += 1;
        }

        var Kw = Math.floor(vK.length / 2);
        var GO = dS.slice(0, 26).length;
        var oN = [];
        var Ut = 0;
        while (Ut < Kw) {
            oN.push(vK[Ut * 2]);
            Ut += 1;
        }

        var gm = oN.length;
        var Ef = 0;
        while (Ef + 1 < gm) {
            var qt = oN[Ef];
            oN[Ef] = oN[Ef + 1];
            oN[Ef + 1] = qt;
            Ef += 2;
        }

        var GJ = oN.slice();
        var Sa = String.fromCharCode.apply(null, GJ);
        var Uq = Sa.replace(/\\u([0-9a-fA-F]{4})/g, function (match, p1) {
            return String.fromCharCode(parseInt(p1, 16));
        });

        return JSON.parse(Uq);
    }

    return decrypt17(item, payload.solution.interrogation.cr);
})(decryptedPayload['K!uTkxO(ew==']);

decryptedPayload['S(sjc(t('] = ((item) => {
    function decrypt18(str, kR) {
        var t4 = sD(1513031664, kR);
        var WN = [];
        var Gi = 0;
        while (Gi < 2) {
            WN.push(t4() & 255);
            Gi += 1;
        }

        var Mw = Buffer.from(str, 'base64')
            .toString('binary')
            .split('')
            .map((c) => c.charCodeAt(0));

        var lM = Mw.slice();
        var Pr = lM.length;
        var ET = 0;
        while (ET + 1 < Pr) {
            var Zm = lM[ET];
            lM[ET] = lM[ET + 1];
            lM[ET + 1] = Zm;
            ET += 2;
        }

        var E7 = lM.slice();
        var Iu = E7.length;
        var Gd = (WN[0] % 7) + 1;
        var Fc = [];
        var od = 0;
        while (od < Iu) {
            Fc.push(((E7[od] >> Gd) | (E7[od] << (8 - Gd))) & 255);
            od += 1;
        }

        var ZH = String.fromCharCode.apply(null, Fc);
        var io = ZH.replace(/\\u([0-9a-fA-F]{4})/g, function (match, p1) {
            return String.fromCharCode(parseInt(p1, 16));
        });

        return JSON.parse(io);
    }

    return decrypt18(item, payload.solution.interrogation.cr);
})(decryptedPayload['S(sjc(t(']);

decryptedPayload['s&uTa&NzK-NzK_s='] = ((item) => {
    function decrypt19(str, kR) {
        var kd = sD(187585459, kR);
        var Ln = [];
        var PU = 0;
        while (PU < 26) {
            Ln.push(kd() & 255);
            PU += 1;
        }

        var et = Buffer.from(str, 'base64')
            .toString('binary')
            .split('')
            .map((c) => c.charCodeAt(0));

        var Sl = et.length;
        var X0 = Ln.slice(2, 25).length;
        var yW = [];
        var SF = 0;
        while (SF < Sl) {
            var encrypted = et[SF];
            var g4 = Ln.slice(2, 25)[SF % X0] & 127;
            var decrypted = encrypted ^ 128;
            var jP = (decrypted - g4 + 256) % 256;
            yW.push(jP);
            SF += 1;
        }

        var I2 = yW.length;
        var g3 = [];
        var Af = I2 - 1;
        while (Af >= 0) {
            g3.push(yW[Af]);
            Af -= 1;
        }

        var Md = g3.length;
        var u0 = (Ln[1] % 7) + 1;
        var Hz = [];
        var Ox = 0;
        while (Ox < Md) {
            Hz.push(((g3[Ox] >> u0) | (g3[Ox] << (8 - u0))) & 255);
            Ox += 1;
        }

        var at = Hz.length;
        var Za = (Ln[0] % 7) + 1;
        var dw = [];
        var N1 = 0;
        while (N1 < at) {
            dw.push(((Hz[N1] >> Za) | (Hz[N1] << (8 - Za))) & 255);
            N1 += 1;
        }

        var yV = String.fromCharCode.apply(null, dw);
        var vg = yV.replace(/\\u([0-9a-fA-F]{4})/g, function (match, p1) {
            return String.fromCharCode(parseInt(p1, 16));
        });

        try {
            return JSON.parse(vg);
        } catch (e) {
            var cleanJson = vg.replace(/[\x00-\x1F\x7F]/g, '');
            return JSON.parse(cleanJson);
        }
    }

    return decrypt19(item, payload.solution.interrogation.cr);
})(decryptedPayload['s&uTa&NzK-NzK_s=']);

decryptedPayload['g&uTK_ujmyt(Yztzu/pzS&sj+ruTgw=='] = ((item) => {
    function decrypt20(str, kR) {
        var xp = sD(1172444063, kR);
        var b0 = [];
        var bd = 0;
        while (bd < 46) {
            b0.push(xp() & 255);
            bd += 1;
        }

        var Cl = Buffer.from(str, 'base64')
            .toString('binary')
            .split('')
            .map((c) => c.charCodeAt(0));

        var Re = Cl.length;
        var l_ = b0.slice(23, 45).length;
        var yC = [];
        var gj = 0;
        while (gj < Re) {
            var encrypted = Cl[gj];
            var Av = b0.slice(23, 45)[gj % l_] & 127;
            var decrypted = encrypted ^ 128;
            var H_ = (decrypted - Av + 256) % 256;
            yC.push(H_);
            gj += 1;
        }

        var Ok = Math.floor(yC.length / 2);
        var AW = b0.slice(0, 23).length;
        var eeL = [];
        var f5 = 0;
        while (f5 < Ok) {
            eeL.push(yC[f5 * 2]);
            f5 += 1;
        }

        var qO = String.fromCharCode.apply(null, eeL);
        var zh = qO.replace(/\\u([0-9a-fA-F]{4})/g, function (match, p1) {
            return String.fromCharCode(parseInt(p1, 16));
        });

        return JSON.parse(zh);
    }

    return decrypt20(item, payload.solution.interrogation.cr);
})(decryptedPayload['g&uTK_ujmyt(Yztzu/pzS&sj+ruTgw==']);

decryptedPayload['K/ors-NzI/qbK!Mbg_t(o!uTS(sjc(t('] = ((item) => {
    function decrypt21(str, kR) {
        var X4 = sD(231443536, kR);
        var j6 = [];
        var wXx = 0;
        while (wXx < 3) {
            j6.push(X4() & 255);
            wXx += 1;
        }

        var Kj = Buffer.from(str, 'base64')
            .toString('binary')
            .split('')
            .map((c) => c.charCodeAt(0));

        var x9 = Kj.length;
        var P4 = [];
        var WP = x9 - 1;
        while (WP >= 0) {
            P4.push(Kj[WP]);
            WP -= 1;
        }

        var LV = P4.length;
        var sp = (j6[1] % 7) + 1;
        var iV = [];
        var KY = 0;
        while (KY < LV) {
            iV.push(((P4[KY] >> sp) | (P4[KY] << (8 - sp))) & 255);
            KY += 1;
        }

        var tv = iV.length;
        var pX = (j6[0] % 7) + 1;
        var Ga = [];
        var AG = 0;
        while (AG < tv) {
            Ga.push(((iV[AG] >> pX) | (iV[AG] << (8 - pX))) & 255);
            AG += 1;
        }

        var VK = Ga.length;
        var xz = [];
        var Th = VK - 1;
        while (Th >= 0) {
            xz.push(Ga[Th]);
            Th -= 1;
        }

        var XU = String.fromCharCode.apply(null, xz);
        var bY = XU.replace(/\\u([0-9a-fA-F]{4})/g, function (match, p1) {
            return String.fromCharCode(parseInt(p1, 16));
        });

        return JSON.parse(bY);
    }

    return decrypt21(item, payload.solution.interrogation.cr);
})(decryptedPayload['K/ors-NzI/qbK!Mbg_t(o!uTS(sjc(t(']);

decryptedPayload['S(sjc(t(Y/qbC/qjo_trK!s='] = ((item) => {
    function decrypt22(str, kR) {
        var OH = sD(2886650022, kR);
        var fS = [];
        var lj = 0;
        while (lj < 48) {
            fS.push(OH() & 255);
            lj += 1;
        }

        var uK = Buffer.from(str, 'base64')
            .toString('binary')
            .split('')
            .map((c) => c.charCodeAt(0));

        var vd = uK.length;
        var PW = (fS[46] % 7) + 1;
        var Qm = [];
        var qi = 0;
        while (qi < vd) {
            Qm.push(((uK[qi] >> PW) | (uK[qi] << (8 - PW))) & 255);
            qi += 1;
        }

        var BY = Qm.length;
        var p6 = fS.slice(27, 46).length;
        var pG = [];
        var dA = 113;
        var Ug = 0;
        while (Ug < BY) {
            var Aa = Qm[Ug];
            var MF = fS.slice(27, 46)[Ug % p6];
            var fm = Aa ^ MF ^ dA;
            pG.push(fm);
            dA = Aa;
            Ug += 1;
        }

        var mG = pG.length;
        var o8 = fS.slice(0, 27).length;
        var Ye = [];
        var SH = 0;
        while (SH < mG) {
            var encrypted = pG[SH];
            var DY = fS.slice(0, 27)[SH % o8] & 127;
            var decrypted = encrypted ^ 128;
            var Yf = (decrypted - DY + 256) % 256;
            Ye.push(Yf);
            SH += 1;
        }

        var pA = String.fromCharCode.apply(null, Ye);
        var zA = pA.replace(/\\u([0-9a-fA-F]{4})/g, function (match, p1) {
            return String.fromCharCode(parseInt(p1, 16));
        });

        return JSON.parse(zA);
    }

    return decrypt22(item, payload.solution.interrogation.cr);
})(decryptedPayload['S(sjc(t(Y/qbC/qjo_trK!s=']);

decryptedPayload['k&ujS(Orm[MLs/orS,O('] = ((item) => {
    function decrypt23(str, kR) {
        var cr = sD(4271953189, kR);
        var Jq = [];
        var dZ = 0;
        while (dZ < 20) {
            Jq.push(cr() & 255);
            dZ += 1;
        }

        var Fa = Buffer.from(str, 'base64')
            .toString('binary')
            .split('')
            .map((c) => c.charCodeAt(0));

        var YR = Fa.length;
        var iB4 = Jq.slice(1, 19).length;
        var mj = [];
        var fE = 0;
        while (fE < YR) {
            var encrypted = Fa[fE];
            var ls = Jq.slice(1, 19)[fE % iB4] & 127;
            var decrypted = encrypted ^ 128;
            var qA = (decrypted - ls + 256) % 256;
            mj.push(qA);
            fE += 1;
        }

        var Cr = mj.length;
        var Go = [];
        var CE = Cr - 1;
        while (CE >= 0) {
            Go.push(mj[CE]);
            CE -= 1;
        }

        var r8 = Go.length;
        var qm = [];
        var Xh = 0;
        while (Xh < r8) {
            var idx = (Xh - Jq[0]) % r8;
            if (idx < 0) idx += r8;
            qm.push(Go[idx]);
            Xh += 1;
        }

        var Hu = String.fromCharCode.apply(null, qm);
        var H5O = Hu.replace(/\\u([0-9a-fA-F]{4})/g, function (match, p1) {
            return String.fromCharCode(parseInt(p1, 16));
        });

        return JSON.parse(H5O);
    }

    return decrypt23(item, payload.solution.interrogation.cr);
})(decryptedPayload['k&ujS(Orm[MLs/orS,O(']);

decryptedPayload['Cysro_P-a-P-Y&sjqxsra-Nzkxs='] = decryptedPayload['Cysro_P-a-P-Y&sjqxsra-Nzkxs='].map((item) => {
    function decrypt24(str, kR) {
        var FV = sD(2047203916, kR);
        var ie = [];
        var Xp = 0;
        while (Xp < 31) {
            ie.push(FV() & 255);
            Xp += 1;
        }

        var pB = Buffer.from(str, 'base64')
            .toString('binary')
            .split('')
            .map((c) => c.charCodeAt(0));

        var Dw = pB.length;
        var NN = (ie[29] % 7) + 1;
        var bP = [];
        var C6 = 0;
        while (C6 < Dw) {
            bP.push(((pB[C6] >> NN) | (pB[C6] << (8 - NN))) & 255);
            C6 += 1;
        }

        var OK = bP.length;
        var zD = ie.slice(0, 29).length;
        var qG = [];
        var qh = 0;
        while (qh < OK) {
            var encrypted = bP[qh];
            var e7 = ie.slice(0, 29)[qh % zD] & 127;
            var decrypted = encrypted ^ 128;
            var J_ = (decrypted - e7 + 256) % 256;
            qG.push(J_);
            qh += 1;
        }

        var Dy = String.fromCharCode.apply(null, qG);
        var hk = Dy.replace(/\\u([0-9a-fA-F]{4})/g, function (match, p1) {
            return String.fromCharCode(parseInt(p1, 16));
        });

        return JSON.parse(hk);
    }

    return decrypt24(item, payload.solution.interrogation.cr);
});

decryptedPayload['g&uTK_ujmyurSyNzkysbm!N(+iuTgw=='] = ((item) => {
    function decrypt25(str, kR) {
        var QV = sD(2417636879, kR);
        var s9 = [];
        var CS = 0;
        while (CS < 48) {
            s9.push(QV() & 255);
            CS += 1;
        }

        var g2 = Buffer.from(str, 'base64')
            .toString('binary')
            .split('')
            .map((c) => c.charCodeAt(0));

        var dn = g2.length;
        var h2 = s9.slice(26, 47).length;
        var aO = [];
        var l1 = 0;
        while (l1 < dn) {
            var encrypted = g2[l1];
            var q1 = s9.slice(26, 47)[l1 % h2] & 127;
            var decrypted = encrypted ^ 128;
            var k3 = (decrypted - q1 + 256) % 256;
            aO.push(k3);
            l1 += 1;
        }

        var Zd = Math.floor(aO.length / 2);
        var YZ = s9.slice(0, 26).length;
        var yX = [];
        var XS = 0;
        while (XS < Zd) {
            yX.push(aO[XS * 2]);
            XS += 1;
        }

        var QM = yX.length;
        var Q2 = 0;
        while (Q2 + 1 < QM) {
            var kh = yX[Q2];
            yX[Q2] = yX[Q2 + 1];
            yX[Q2 + 1] = kh;
            Q2 += 2;
        }

        var JE = yX.slice();
        var tR = String.fromCharCode.apply(null, JE);
        var Ot = tR.replace(/\\u([0-9a-fA-F]{4})/g, function (match, p1) {
            return String.fromCharCode(parseInt(p1, 16));
        });

        return JSON.parse(Ot);
    }

    return decrypt25(item, payload.solution.interrogation.cr);
})(decryptedPayload['g&uTK_ujmyurSyNzkysbm!N(+iuTgw==']);

decryptedPayload['g/pje-tjS-Nze_u(I&O(ew=='] = ((item) => {
    function decrypt26(str, kR) {
        var lk = sD(1506186811, kR);
        var HJ = [];
        var Um = 0;
        while (Um < 3) {
            HJ.push(lk() & 255);
            Um += 1;
        }

        var Cjz = Buffer.from(str, 'base64')
            .toString('binary')
            .split('')
            .map((c) => c.charCodeAt(0));

        var kw = Cjz.length;
        var ub = (HJ[1] % 7) + 1;
        var cU = [];
        var fn = 0;
        while (fn < kw) {
            cU.push(((Cjz[fn] >> ub) | (Cjz[fn] << (8 - ub))) & 255);
            fn += 1;
        }

        var Mn = cU.length;
        var z8 = [];
        var DOD = 0;
        while (DOD < Mn) {
            var idx = (DOD - HJ[0]) % Mn;
            if (idx < 0) idx += Mn;
            z8.push(cU[idx]);
            DOD += 1;
        }

        var CZ4 = String.fromCharCode.apply(null, z8);
        var fl = CZ4.replace(/\\u([0-9a-fA-F]{4})/g, function (match, p1) {
            return String.fromCharCode(parseInt(p1, 16));
        });

        return JSON.parse(fl);
    }

    return decrypt26(item, payload.solution.interrogation.cr);
})(decryptedPayload['g/pje-tjS-Nze_u(I&O(ew==']);

decryptedPayload['qzMbc_ujc&uD+nuTSzMrY!s='] = ((item) => {
    function decryptZ4Value(str, kR) {
        var A9 = sD(215464049, kR);
        var zd = [];
        var Sr = 0;
        while (Sr < 26) {
            zd.push(A9() & 255);
            Sr += 1;
        }

        var Iy = Buffer.from(str, 'base64')
            .toString('binary')
            .split('')
            .map((c) => c.charCodeAt(0));

        var k6 = Iy.length;
        var rl = (zd[24] % 7) + 1;
        var t6 = [];
        var WQ = 0;
        while (WQ < k6) {
            t6.push(((Iy[WQ] >> rl) | (Iy[WQ] << (8 - rl))) & 255);
            WQ += 1;
        }

        var qs = t6.length;
        var Lb = 0;
        while (Lb + 1 < qs) {
            var UB = t6[Lb];
            t6[Lb] = t6[Lb + 1];
            t6[Lb + 1] = UB;
            Lb += 2;
        }

        var Bu = t6.slice();
        var cW = Math.floor(Bu.length / 2);
        var n0 = zd.slice(0, 24).length;
        var wI = [];
        var yu = 0;
        while (yu < cW) {
            wI.push(Bu[yu * 2]);
            yu += 1;
        }

        var X5 = String.fromCharCode.apply(null, wI);
        var YM = X5.replace(/\\u([0-9a-fA-F]{4})/g, function (match, p1) {
            return String.fromCharCode(parseInt(p1, 16));
        });

        return JSON.parse(YM);
    }

    function decrypt27(str, kR) {
        var cO = sD(215464049, kR);
        var fO = [];
        var vfT = 0;
        while (vfT < 26) {
            fO.push(cO() & 255);
            vfT += 1;
        }

        var M0 = Buffer.from(str, 'base64')
            .toString('binary')
            .split('')
            .map((c) => c.charCodeAt(0));

        var xi = M0.length;
        var R_ = (fO[24] % 7) + 1;
        var wc = [];
        var B3 = 0;
        while (B3 < xi) {
            wc.push(((M0[B3] >> R_) | (M0[B3] << (8 - R_))) & 255);
            B3 += 1;
        }

        var SS = wc.length;
        var F4c = 0;
        while (F4c + 1 < SS) {
            var HYp = wc[F4c];
            wc[F4c] = wc[F4c + 1];
            wc[F4c + 1] = HYp;
            F4c += 2;
        }

        var lL = wc.slice();
        var Uhp = Math.floor(lL.length / 2);
        var fb = fO.slice(0, 24).length;
        var Xd = [];
        var Jp = 0;
        while (Jp < Uhp) {
            Xd.push(lL[Jp * 2]);
            Jp += 1;
        }

        var jf = String.fromCharCode.apply(null, Xd);
        var pJ = jf.replace(/\\u([0-9a-fA-F]{4})/g, function (match, p1) {
            return String.fromCharCode(parseInt(p1, 16));
        });

        var mainData = JSON.parse(pJ);
        var result = {};

        for (var key in mainData) {
            if (mainData.hasOwnProperty(key)) {
                var encryptedValue = mainData[key];
                if (typeof encryptedValue === 'string' && encryptedValue.length > 0) {
                    try {
                        result[key] = decryptZ4Value(encryptedValue, kR);

                        result[key] = Object.entries(result[key]).reduce((acc, [k, v]) => {
                            if (typeof v === 'string' && v.length > 0) {
                                acc[k] = decryptZ4Value(v, kR);
                            }
                            return acc;
                        }, {});
                    } catch (e) {
                        result[key] = encryptedValue;
                    }
                } else {
                    result[key] = encryptedValue;
                }
            }
        }

        return result;
    }

    return decrypt27(item, payload.solution.interrogation.cr);
})(decryptedPayload['qzMbc_ujc&uD+nuTSzMrY!s=']);

decryptedPayload['o&uje,PL+it(g[Njo-t(S!tzk,M='] = ((item) => {
    function decrypt28(str, kR) {
        var kL = sD(1850310790, kR);
        var e0 = [];
        var Wy = 0;
        while (Wy < 2) {
            e0.push(kL() & 255);
            Wy += 1;
        }

        var Wy4 = Buffer.from(str, 'base64')
            .toString('binary')
            .split('')
            .map((c) => c.charCodeAt(0));

        var aR = Wy4.length;
        var RV = (e0[0] % 7) + 1;
        var a6 = [];
        var Em = 0;
        while (Em < aR) {
            a6.push(((Wy4[Em] >> RV) | (Wy4[Em] << (8 - RV))) & 255);
            Em += 1;
        }

        var Fd = a6.length;
        var Ne = [];
        var Ob = Fd - 1;
        while (Ob >= 0) {
            Ne.push(a6[Ob]);
            Ob -= 1;
        }

        var UqB = String.fromCharCode.apply(null, Ne);
        var pj = UqB.replace(/\\u([0-9a-fA-F]{4})/g, function (match, p1) {
            return String.fromCharCode(parseInt(p1, 16));
        });

        return JSON.parse(pj);
    }

    return decrypt28(item, payload.solution.interrogation.cr);
})(decryptedPayload['o&uje,PL+it(g[Njo-t(S!tzk,M=']);

decryptedPayload['a-tDGxsrm$s='] = ((item) => {
    function decrypt29(str, kR) {
        var gYK = sD(3231912067, kR);
        var es = [];
        var rAO = 0;
        while (rAO < 32) {
            es.push(gYK() & 255);
            rAO += 1;
        }

        var Qs = Buffer.from(str, 'base64')
            .toString('binary')
            .split('')
            .map((c) => c.charCodeAt(0));

        var PF = Math.floor(Qs.length / 2);
        var YC = es.slice(1, 31).length;
        var wV = [];
        var eb = 0;
        while (eb < PF) {
            wV.push(Qs[eb * 2]);
            eb += 1;
        }

        var KK = wV.length;
        var qn = (es[0] % 7) + 1;
        var Zn = [];
        var yF7 = 0;
        while (yF7 < KK) {
            Zn.push(((wV[yF7] >> qn) | (wV[yF7] << (8 - qn))) & 255);
            yF7 += 1;
        }

        var cn = String.fromCharCode.apply(null, Zn);
        var Lnr = cn.replace(/\\u([0-9a-fA-F]{4})/g, function (match, p1) {
            return String.fromCharCode(parseInt(p1, 16));
        });

        return JSON.parse(Lnr);
    }

    return decrypt29(item, payload.solution.interrogation.cr);
})(decryptedPayload['a-tDGxsrm$s=']);

decryptedPayload['e_tzK(Obkw=='] = ((item) => {
    function decrypt30(str, kR) {
        var Z1 = sD(3510753592, kR);
        var yL = [];
        var BD = 0;
        while (BD < 57) {
            yL.push(Z1() & 255);
            BD += 1;
        }

        var Pf = Buffer.from(str, 'base64')
            .toString('binary')
            .split('')
            .map((c) => c.charCodeAt(0));

        var jM = Pf.length;
        var Yx = yL.slice(26, 56).length;
        var Ng = [];
        var HTB = 0;
        while (HTB < jM) {
            var encrypted = Pf[HTB];
            var LL = yL.slice(26, 56)[HTB % Yx] & 127;
            var decrypted = encrypted ^ 128;
            var Tn = (decrypted - LL + 256) % 256;
            Ng.push(Tn);
            HTB += 1;
        }

        var KN = Ng.length;
        var gq = [];
        var ft = 0;
        while (ft < KN) {
            var idx = (ft - yL[25]) % KN;
            if (idx < 0) idx += KN;
            gq.push(Ng[idx]);
            ft += 1;
        }

        var Rv = gq.length;
        var LKb = yL.slice(0, 25).length;
        var HO = [];
        var GD = 0;
        while (GD < Rv) {
            var encrypted = gq[GD];
            var KX = yL.slice(0, 25)[GD % LKb] & 127;
            var decrypted = encrypted ^ 128;
            var OP = (decrypted - KX + 256) % 256;
            HO.push(OP);
            GD += 1;
        }

        var w3 = String.fromCharCode.apply(null, HO);
        var pw = w3.replace(/\\u([0-9a-fA-F]{4})/g, function (match, p1) {
            return String.fromCharCode(parseInt(p1, 16));
        });

        return JSON.parse(pw);
    }

    return decrypt30(item, payload.solution.interrogation.cr);
})(decryptedPayload['e_tzK(Obkw==']);

decryptedPayload['c&srk_uzS!s='] = ((item) => {
    function decrypt31(str, kR) {
        var ww = sD(1273776091, kR);
        var HE = [];
        var ID = 0;
        while (ID < 20) {
            HE.push(ww() & 255);
            ID += 1;
        }

        var vr = Buffer.from(str, 'base64')
            .toString('binary')
            .split('')
            .map((c) => c.charCodeAt(0));

        var Y3B = vr.length;
        var hr = [];
        var Ydq = 0;
        while (Ydq < Y3B) {
            var idx = (Ydq - HE[18]) % Y3B;
            if (idx < 0) idx += Y3B;
            hr.push(vr[idx]);
            Ydq += 1;
        }

        var A7 = hr.length;
        var jJ = HE.slice(0, 18).length;
        var ZL = [];
        var mS = 113;
        var si = 0;
        while (si < A7) {
            var U7 = hr[si];
            var ia = HE.slice(0, 18)[si % jJ];
            var dm = U7 ^ ia ^ mS;
            ZL.push(dm);
            mS = U7;
            si += 1;
        }

        var Ey = String.fromCharCode.apply(null, ZL);
        var NX = Ey.replace(/\\u([0-9a-fA-F]{4})/g, function (match, p1) {
            return String.fromCharCode(parseInt(p1, 16));
        });

        return JSON.parse(NX);
    }

    return decrypt31(item, payload.solution.interrogation.cr);
})(decryptedPayload['c&srk_uzS!s=']);

decryptedPayload['C-MrawujCyM='] = ((item) => {
    function decrypt32(str, kR) {
        var y6 = sD(319184527, kR);
        var gXQ = [];
        var Wh = 0;
        while (Wh < 4) {
            gXQ.push(y6() & 255);
            Wh += 1;
        }

        var gG = Buffer.from(str, 'base64')
            .toString('binary')
            .split('')
            .map((c) => c.charCodeAt(0));

        var I5 = gG.slice();
        var rL2 = I5.length;
        var KFG = 0;
        while (KFG + 1 < rL2) {
            var wA = I5[KFG];
            I5[KFG] = I5[KFG + 1];
            I5[KFG + 1] = wA;
            KFG += 2;
        }

        var Gsx = I5.slice();
        var kK = Gsx.length;
        var Wn = (gXQ[2] % 7) + 1;
        var DH = [];
        var mX = 0;
        while (mX < kK) {
            DH.push(((Gsx[mX] >> Wn) | (Gsx[mX] << (8 - Wn))) & 255);
            mX += 1;
        }

        var Kc = DH.length;
        var iz = [];
        var cp = 0;
        while (cp < Kc) {
            var idx = (cp - gXQ[1]) % Kc;
            if (idx < 0) idx += Kc;
            iz.push(DH[idx]);
            cp += 1;
        }

        var Bo = iz.length;
        var wBN = [];
        var MS = 0;
        while (MS < Bo) {
            var idx = (MS - gXQ[0]) % Bo;
            if (idx < 0) idx += Bo;
            wBN.push(iz[idx]);
            MS += 1;
        }

        var Ak = String.fromCharCode.apply(null, wBN);
        var MTL = Ak.replace(/\\u([0-9a-fA-F]{4})/g, function (match, p1) {
            return String.fromCharCode(parseInt(p1, 16));
        });

        return JSON.parse(MTL);
    }

    return decrypt32(item, payload.solution.interrogation.cr);
})(decryptedPayload['C-MrawujCyM=']);

decryptedPayload['e$uTg&t(+jMze(v-kw=='] = ((item) => {
    function decrypt33(str, kR) {
        var TS = sD(290410654, kR);
        var EJ = [];
        var gg = 0;
        while (gg < 36) {
            EJ.push(TS() & 255);
            gg += 1;
        }

        var u2 = Buffer.from(str, 'base64')
            .toString('binary')
            .split('')
            .map((c) => c.charCodeAt(0));

        var nf = u2.length;
        var KmD = EJ.slice(17, 35).length;
        var nw = [];
        var gn = 113;
        var T9 = 0;
        while (T9 < nf) {
            var F_Q = u2[T9];
            var MN = EJ.slice(17, 35)[T9 % KmD];
            var Ac = F_Q ^ MN ^ gn;
            nw.push(Ac);
            gn = F_Q;
            T9 += 1;
        }

        var WX = nw.length;
        var d0 = [];
        var up = WX - 1;
        while (up >= 0) {
            d0.push(nw[up]);
            up -= 1;
        }

        var vv = d0.length;
        var Pxd = EJ.slice(1, 17).length;
        var N4 = [];
        var Z8 = 0;
        while (Z8 < vv) {
            var encrypted = d0[Z8];
            var VT = EJ.slice(1, 17)[Z8 % Pxd] & 127;
            var decrypted = encrypted ^ 128;
            var yhj = (decrypted - VT + 256) % 256;
            N4.push(yhj);
            Z8 += 1;
        }

        var KT = N4.length;
        var HI = (EJ[0] % 7) + 1;
        var Zy = [];
        var PL = 0;
        while (PL < KT) {
            Zy.push(((N4[PL] >> HI) | (N4[PL] << (8 - HI))) & 255);
            PL += 1;
        }

        var nQ = String.fromCharCode.apply(null, Zy);
        var Yq = nQ.replace(/\\u([0-9a-fA-F]{4})/g, function (match, p1) {
            return String.fromCharCode(parseInt(p1, 16));
        });

        return JSON.parse(Yq);
    }

    return decrypt33(item, payload.solution.interrogation.cr);
})(decryptedPayload['e$uTg&t(+jMze(v-kw==']);

function recursiveKeySort(obj) {
    if (typeof obj !== 'object' || obj === null || Array.isArray(obj)) {
        return obj;
    }

    const sortedObj = {};
    const sortedKeys = Object.keys(obj).sort();

    for (const key of sortedKeys) {
        const value = obj[key];
        if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
            sortedObj[key] = recursiveKeySort(value);
        } else {
            sortedObj[key] = value;
        }
    }

    return sortedObj;
}

console.log('Decrypted Payload:', JSON.stringify(recursiveKeySort(decryptedPayload), null, 2));
