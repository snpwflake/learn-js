function itsUrl(href) {
  let result = true;
  let error;
  let domenFirstLvl = 'com.net.org.info.biz.name.aero.arpa.edu.int.gov.mil.coop.museum.mobi.pro.tel.travel.xxx.ac.ad.ae.af.ag.ai.al.am.an.ao.aq.ar.as.at.au.aw.az.ba.bb.bd.be.bf.bg.bh.bi.bj.bm.bn.bo.br.bs.bt.bv.bw.by.bz.ca.cc.cd.cf.cg.ch.ci.ck.cl.cm.cn.co.cr.cu.cv.cx.cy.cz.de.dj.dk.dm.do.dz.ec.ee.eg.eh.er.es.et.eu.fi.fj.fk.fm.fo.fr.ga.gd.ge.gf.gg.gh.gi.gl.gm.gn.gp.gq.gr.gs.gt.gu.gw.gy.hk.hm.hn.hr.ht.hu.id.ie.il.im.in.io.iq.ir.is.it.je.jm.jo.jp.ke.kg.kh.ki.km.kn.kp.kr.kw.ky.kz.la.lb.lc.li.lk.lr.ls.lt.lu.lv.ly.ma.mc.md.mg.mh.mk.ml.mm.mn.mo.mp.mq.mr.ms.mt.mu.mv.mw.mx.my.mz.na.nc.ne.nf.ng.nl.no.np.nr.nu.nz.om.pa.pe.pf.pg.ph.pk.pl.pm.pn.pr.ps.pt.pw.py.qa.re.ro.ru.rw.sa.sb.sc.sd.se.sg.sh.si.sj.sk.sl.sm.sn.so.sr.st.su.sv.sy.sz.tc.td.tf.tg.th.tj.tk.tm.tn.to.tp.tr.tt.tv.tw.tz.ua.ug.uk.um.us.uy.uz.va.vc.ve.vg.vi.vn.vu.wf.ws.ye.yt.yu.za.zm.zw';
  domenFirstLvl = domenFirstLvl.split('.');
  // Проверка протокола
  const protocol = href.split('//')[0];
  const protocols = ['https:', 'http:'];
  let useProtocol = '';
  protocols.forEach((str) => {
    if (str === protocol) {
      useProtocol = `${protocol}//`;
      href = href.split('//')[1];
    }
  });

  let host;
  let path;
  // Проверка на хост и путь
  if (href.indexOf('/') > 0) {
    host = href.substr(0, href.indexOf('/'));
    path = href.substr(href.indexOf('/'));
  } else {
    host = href;
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
    if (port >= 0 & port <= 65535) {
    } else {
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
  let hash;
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
  const origin = useProtocol + hostname + port;

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
    tempHostname[i].split('').forEach((char) => {
      char = char.toLowerCase().charCodeAt();
      if ((char > 96 & char < 123) || char === 45 || (char > 47 & char < 58) || (char > 1071 & char < 1104)) {
      } else {
        error = 'Ошибка 4';
        result = false;
      }
    });
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
    href = useProtocol + href;
    return [result, href];
  }

  return [result, error];
}

const message1 = 'Всем привет!';
postSize(message1); // вернет 12

const message2 = 'Привет! https://githu--b.com; http://www.tigir.com/ https://ya.ru/ vk.com ПРИВЕТ.ru https://ru.stack1overflow.com/questions/611546/Прервать-цикл-foreach-javascript';
postSize(message2); // вернет 34

function postSize(message) {
  sum = message.length;
  message = message.split(' ');
  message.forEach((str) => {
    for (let i = 0; i < str.length; i += 1) {
      if (str[str.length - 1] === ';' || str[str.length - 1] === '!' || str[str.length - 1] === '?' || str[str.length - 1] === ',' || str[str.length - 1] === '.' || str[str.length - 1] === ':') {
        str = str.substr(0, str.length - 1);
      }
    }
    result = itsUrl(str);
    if (result[0] === true) {
      sum -= result[1].length;
    }
  });
  console.log(sum);
}
