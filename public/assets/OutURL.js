function sortSymb(str) {
  str.split('').forEach((symbol) => {
    const char = symbol.toLowerCase().charCodeAt();
    const rangeEng = char >= 96 && char <= 122;
    const rangeRus = char >= 1072 && char <= 1103;
    const rangSymb = (char >= 48 && char <= 57) || char === 45;
    if (rangeEng === false && rangeRus === false && rangSymb === false) {
      return false;
    }
    return true;
  });
}

function SearchURL(href) {
  let result = true;
  let error;
  let domenFirstLvl = 'com.net.org.info.biz.name.aero.arpa.edu.int.gov.mil.coop.museum.mobi.pro.tel.travel.xxx.ac.ad.ae.af.ag.ai.al.am.an.ao.aq.ar.as.at.au.aw.az.ba.bb.bd.be.bf.bg.bh.bi.bj.bm.bn.bo.br.bs.bt.bv.bw.by.bz.ca.cc.cd.cf.cg.ch.ci.ck.cl.cm.cn.co.cr.cu.cv.cx.cy.cz.de.dj.dk.dm.do.dz.ec.ee.eg.eh.er.es.et.eu.fi.fj.fk.fm.fo.fr.ga.gd.ge.gf.gg.gh.gi.gl.gm.gn.gp.gq.gr.gs.gt.gu.gw.gy.hk.hm.hn.hr.ht.hu.id.ie.il.im.in.io.iq.ir.is.it.je.jm.jo.jp.ke.kg.kh.ki.km.kn.kp.kr.kw.ky.kz.la.lb.lc.li.lk.lr.ls.lt.lu.lv.ly.ma.mc.md.mg.mh.mk.ml.mm.mn.mo.mp.mq.mr.ms.mt.mu.mv.mw.mx.my.mz.na.nc.ne.nf.ng.nl.no.np.nr.nu.nz.om.pa.pe.pf.pg.ph.pk.pl.pm.pn.pr.ps.pt.pw.py.qa.re.ro.ru.rw.sa.sb.sc.sd.se.sg.sh.si.sj.sk.sl.sm.sn.so.sr.st.su.sv.sy.sz.tc.td.tf.tg.th.tj.tk.tm.tn.to.tp.tr.tt.tv.tw.tz.ua.ug.uk.um.us.uy.uz.va.vc.ve.vg.vi.vn.vu.wf.ws.ye.yt.yu.za.zm.zw';
  domenFirstLvl = domenFirstLvl.split('.');
  // Проверка протокола
  const protocol = href.split('//')[0];
  const protocols = ['https:', 'http:'];
  let useProtocol = '';
  let newHref = href;
  protocols.forEach((str) => {
    if (str === protocol) {
      useProtocol = `${protocol}//`;
      newHref = href.split('//')[1].toString();
    }
  });
  let host;
  let path;
  // Проверка на хост и путь
  if (newHref.indexOf('/') > 0) {
    host = newHref.substr(0, newHref.indexOf('/'));
    path = newHref.substr(newHref.indexOf('/'));
  } else {
    host = newHref;
    path = '';
  }
  let hostname;
  let port;
  // Проверка на домен и порт
  if (host.indexOf(':') > 0) {
    hostname = host.substr(0, host.indexOf(':'));
    port = host.substr(host.indexOf(':'));
  } else {
    hostname = host;
    port = '';
  }
  // 1-ая проверка на "Сайт ли это?"
  if (hostname.split('.').length < 2) {
    error = 'Ошибка 1';
    result = false;
  }
  if (hostname.indexOf('/') === 0) {
    error = 'Ошибка 2';
    result = false;
  }
  if (port.length > 0) {
    port = port.substr(1);
    if (port <= 0 || port >= 65535) {
      error = 'Ошибка 10';
      result = false;
    }
    if (port.length === 0) {
      error = 'Ошибка 11';
      result = false;
    }
    port = `:${port}`;
  }

  // Проверка на путь, поисковый запрос, хэш
  let pathname;
  let search;
  let hash = '';
  if (path.indexOf('?') > 0) {
    pathname = path.substr(0, path.indexOf('?'));
    search = path.substr(path.indexOf('?'));
    if (search.indexOf('#') > 0) {
      search = search.substr(0, search.indexOf('#'));
      hash = path.substr(path.indexOf('#'));
    } else {
      hash = '';
    }
  } else if (path.indexOf('#') > 0) {
    pathname.substr(0, path.indexOf('#'));
    search = '';
    hash = path.substr(path.indexOf('#'));
  } else {
    pathname = path;
    search = '';
    hash = '';
  }
  // Проверка латиницу, кириллицу и символы
  const tempHostname = hostname.split('.');
  for (let i = 0; i < tempHostname.length - 1; i += 1) {
    if (tempHostname[i].length < 2 || tempHostname[i].length > 63) {
      error = 'Ошибка 7';
      result = false;
    }
    if (tempHostname[i][0] === '-' || tempHostname[i][tempHostname.length - 1] === '-' || tempHostname[i].indexOf('--') > 0) {
      error = 'Ошибка 5';
      result = false;
    }
    if (sortSymb(tempHostname[i]) === false) {
      error = 'Ошибка 4';
      result = false;
    }
  }
  if (result === false) {
    return [false, error];
  }
  let tempDomen = false;
  domenFirstLvl.forEach((domen) => {
    if (tempHostname[tempHostname.length - 1] === domen) {
      tempDomen = true;
    }
  });
  if (tempDomen === false) {
    error = 'Ошибка 6';
    result = false;
  }
  if (result === true) {
    newHref = useProtocol + href;
    return [result, href];
  }
  return [result, error];
}

export default function OutURL(message) {
  let result;
  const mesResult = message.split(' ');
  for (let index = 0; index < mesResult.length; index += 1) {
    let foo = mesResult[index];
    for (let i = 0; i < mesResult[index].length; i += 1) {
      const boo = foo.length - 1;
      if (foo[boo] === ';' || foo[boo] === '!' || foo[boo] === '?' || foo[boo] === ',' || foo[boo] === '.' || foo[boo] === ':' || foo[boo] === '/') {
        foo = foo.substr(0, foo.length - 1);
      }
    }
    result = SearchURL(foo);
    if (result[0] === true) {
      if (mesResult[index].indexOf('https://') === -1 || mesResult[index] === -1) {
        mesResult[index] = `<a href="https://${result[1]}">${result[1]}</a>`;
      } else {
        mesResult[index] = `<a href="${result[1]}">${result[1]}</a>`;
      }
    }
  }
  return mesResult.join(' ');
}
