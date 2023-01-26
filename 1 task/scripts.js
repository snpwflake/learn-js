const message1 = 'Всем привет!';
postSize(message1); // вернет 12

const message2 = 'Привет! https://github.com, http://www.tigir.com/. https://ya.ru/; vk.com! ПРИВЕТ.ru';
postSize(message2); // вернет 16

function postSize(message) {
  let result = message.length;
  message = message.split(' ');
  message.forEach((str1) => {
    result -= checkIp(str1).length;
  });
  console.log(result);
}

function checkIp(str) {
  let result = true;
  // Список протоколов
  const protocols = ['https://', 'http://'];
  // Создаем список доменов
  const arr = 'com.net.org.info.biz.name.aero.arpa.edu.int.gov.mil.coop.museum.mobi.pro.tel.travel.xxx.ac.ad.ae.af.ag.ai.al.am.an.ao.aq.ar.as.at.au.aw.az.ba.bb.bd.be.bf.bg.bh.bi.bj.bm.bn.bo.br.bs.bt.bv.bw.by.bz.ca.cc.cd.cf.cg.ch.ci.ck.cl.cm.cn.co.cr.cu.cv.cx.cy.cz.de.dj.dk.dm.do.dz.ec.ee.eg.eh.er.es.et.eu.fi.fj.fk.fm.fo.fr.ga.gd.ge.gf.gg.gh.gi.gl.gm.gn.gp.gq.gr.gs.gt.gu.gw.gy.hk.hm.hn.hr.ht.hu.id.ie.il.im.in.io.iq.ir.is.it.je.jm.jo.jp.ke.kg.kh.ki.km.kn.kp.kr.kw.ky.kz.la.lb.lc.li.lk.lr.ls.lt.lu.lv.ly.ma.mc.md.mg.mh.mk.ml.mm.mn.mo.mp.mq.mr.ms.mt.mu.mv.mw.mx.my.mz.na.nc.ne.nf.ng.nl.no.np.nr.nu.nz.om.pa.pe.pf.pg.ph.pk.pl.pm.pn.pr.ps.pt.pw.py.qa.re.ro.ru.rw.sa.sb.sc.sd.se.sg.sh.si.sj.sk.sl.sm.sn.so.sr.st.su.sv.sy.sz.tc.td.tf.tg.th.tj.tk.tm.tn.to.tp.tr.tt.tv.tw.tz.ua.ug.uk.um.us.uy.uz.va.vc.ve.vg.vi.vn.vu.wf.ws.ye.yt.yu.za.zm.zw';
  const domen_first_level = arr.split('.');
  // Возможные домены по которому нашли сайт
  const domen_po_kotoromu_nashli_address = [];
  // Разделяем слова по точкам
  let site = str.split('.');
  // Содержит ли протокол
  let useprotocol = [false, ''];
  protocols.forEach((protocol) => {
    if (site[0].indexOf(protocol) === 0) {
      site[0] = site[0].substring(protocol.length);
      useprotocol = [true, protocol];
    }
  });
  // После 'разложения' сайта на подстроки, проверяем есть ли пустая подстрока в конце
  if (site[site.length - 1] === '') {
    site = site.slice(0, site.length - 1);
  }

  // Сайт содержит кириллицу, латиницу, и дефис, дефис не должен быть в начале или в конце
  // не должно встречатся более 1 дефиса подряд
  for (let i = 0; i < site.length - 1; i += 1) {
    const arr = site[i].split('');
    arr.forEach((char) => {
      char = char.toLowerCase().charCodeAt();
      if ((char > 96 & char < 123) || char === 45 || (char > 47 & char < 58) || (char > 1071 & char < 1104)) {
      } else {
        result = false;
      }
    });
    const a = site[i].indexOf('-') >= 0;
    const b = site[i].indexOf('--') > 0;
    if (b === true) {
      result = false;
    }
    if (a === true) {
      if (site[i].indexOf('-') > 0 & site[i].indexOf('-') < site[i].length - 1) {

      } else {
        result = false;
      }
    }
  }
  // Проверка домена первого уровня
  const mas = site[site.length - 1].split('/');
  domen_first_level.forEach((domen) => {
    if (mas[0].indexOf(domen) >= 0) {
      domen_po_kotoromu_nashli_address.push(domen);
    }
  });
  if (domen_po_kotoromu_nashli_address.length < 1) {
    result = false;
  }
  // Собираем сайт по частям
  mas[0] = domen_po_kotoromu_nashli_address[0];
  site[site.length - 1] = mas[0];
  site = site.join('.');
  if (useprotocol[0] === true) {
    site = useprotocol[1] + site;
  }
  if (mas.length > 1) {
    site += '/';
  }
  if (result === true) {
    //console.log(site);
    return site;
  }
  return '';
}
