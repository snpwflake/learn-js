const message1 = 'Всем привет!';
postSize(message1); // вернет 12

const message2 = 'Привет! https://github.com, http://www.tigir.com. https://ya.ru/; vk.com привет.ru.собака';
postSize(message2); // вернет 8

function postSize(message){
  message = message.split(' ')
  message.forEach( str1 => {
    //checkIp(str1);
  })
}

function checkIp(str){
  console.log(str)
  // Список протоколов
  const protocols = ['https://', 'http://'];
  //Создаем список доменов 
  let arr = 'com.net.org.info.biz.name.aero.arpa.edu.int.gov.mil.coop.museum.mobi.pro.tel.travel.xxx.ac.ad.ae.af.ag.ai.al.am.an.ao.aq.ar.as.at.au.aw.az.ba.bb.bd.be.bf.bg.bh.bi.bj.bm.bn.bo.br.bs.bt.bv.bw.by.bz.ca.cc.cd.cf.cg.ch.ci.ck.cl.cm.cn.co.cr.cu.cv.cx.cy.cz.de.dj.dk.dm.do.dz.ec.ee.eg.eh.er.es.et.eu.fi.fj.fk.fm.fo.fr.ga.gd.ge.gf.gg.gh.gi.gl.gm.gn.gp.gq.gr.gs.gt.gu.gw.gy.hk.hm.hn.hr.ht.hu.id.ie.il.im.in.io.iq.ir.is.it.je.jm.jo.jp.ke.kg.kh.ki.km.kn.kp.kr.kw.ky.kz.la.lb.lc.li.lk.lr.ls.lt.lu.lv.ly.ma.mc.md.mg.mh.mk.ml.mm.mn.mo.mp.mq.mr.ms.mt.mu.mv.mw.mx.my.mz.na.nc.ne.nf.ng.nl.no.np.nr.nu.nz.om.pa.pe.pf.pg.ph.pk.pl.pm.pn.pr.ps.pt.pw.py.qa.re.ro.ru.rw.sa.sb.sc.sd.se.sg.sh.si.sj.sk.sl.sm.sn.so.sr.st.su.sv.sy.sz.tc.td.tf.tg.th.tj.tk.tm.tn.to.tp.tr.tt.tv.tw.tz.ua.ug.uk.um.us.uy.uz.va.vc.ve.vg.vi.vn.vu.wf.ws.ye.yt.yu.za.zm.zw';
  const domen_first_level = arr.split('.');
  //Возможные домены по которому нашли сайт
  const domen_po_kotoromu_nashli_address = []
  //Разделяем слова по точкам
  let site = str.split('.');
  //Содержит ли протокол
  let useprotocol =[false, '']
  protocols.forEach(protocol => {
    if (site[0].indexOf(protocol)===0){
      console.log(site[0])
      site[0] = site[0].substring(protocol.length)
      useprotocol = [true, protocol]
    }
  })
  //Проверка строения сайта
  if (site.length > 1){
    domen_first_level.forEach(domen => {
      site.forEach( str => {
        if (str.indexOf(domen)===0){
          domen_po_kotoromu_nashli_address.push(domen)
        }
      })
    });
  }
  else(
    console.log('Это не очень похоже на сайт')
  )
  console.log(domen_po_kotoromu_nashli_address)
  console.log(site,useprotocol);
  //Проверка на лишние символы в домене
  for (let i = 0; i < site.length-1; i+=1){
    site[i].split(' ').forEach(char => {
      let a = char.charCodeAt();
      console.log(char)
      if (a <= 97 && a >= 122){
        console.log('Это не сайт')
      }
    })
  }
}
checkIp('http://www.tagir.com;.')