import { createHash } from 'crypto'
import { canLevelUp, xpRange } from '../lib/levelling.js'
import fetch from 'node-fetch'
import fs from 'fs'
const { levelling } = '../lib/levelling.js'
import moment from 'moment-timezone'
import { promises } from 'fs'
import { join } from 'path'
const time = moment.tz('Egypt').format('HH')
let wib = moment.tz('Egypt').format('HH:mm:ss')
//import db from '../lib/database.js'

let handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
    let d = new Date(new Date + 3600000)
    let locale = 'ar'
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
if (!(who in global.db.data.users)) throw `✳️ The user is not found in my database`
let videoUrl = 'https://telegra.ph/file/fe1c46739cc6612f71934.mp4';
  let vn = './media/menu.mp3';
  const user = global.db.data.users[m.sender];
  const {money, joincount} = global.db.data.users[m.sender];
  const {exp, limit, level, role} = 
    global.db.data.users[m.sender];
let { min, xp, max } = xpRange(user.level, global.multiplier)
let username = conn.getName(who)
let math = max - xp
let sn = createHash('md5').update(who).digest('hex')
let totalreg = Object.keys(global.db.data.users).length;
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(900) 
  const taguser = '@' +  m.sender.split('@s.whatsapp.net')[0];
let str = ` 
*「✧|───✦❯┇💎┇❮✦───|✧」*

 *❐↞『نورت ${taguser}』*
*〄「 🎀┃جـمـيع الاوامـر ┃🎀 」* 

 *✧━━ • ━ 「 ✤ 」 ━ • ━━✧*
*〄 اوامـر الـقـروب┃↞ ❮ ✓ ❯* 
*✧━━ • ━ 「 ✤ 」 ━ • ━━✧*
*❄️✬⃝┇.طرد 』*
*❄️✬⃝┇.منشن 』*
*❄️✬⃝┇.المشرفين 』*
*❄️✬⃝┇.جروب قفل 』*
*❄️✬⃝┇.جروب فتح 』*
*❄️✬⃝┇.الجروب 』*
*❄️✬⃝┇.تحذير 』*
*❄️✬⃝┇.حذف_انذار 』*
*❄️✬⃝┇.المتصلين 』*
*❄️✬⃝┇.المبندين 』*
*❄️✬⃝┇.تغيير_اللينك 』*
*❄️✬⃝┇.دعوه 』*
*❄️✬⃝┇.احذف 』*
*❄️✬⃝┇.الاشباح 』*
*❄️✬⃝┇.ترقية 』*
*❄️✬⃝┇.تخفيض』*
*❄️✬⃝┇.الترحيب 』*
*❄️✬⃝┇.مخفي』*
*✧━━ • ━ 「 ✤ 」 ━ • ━━✧*
*〄┃اوامـر الأعـضـاء┃↞ ❮ ✓ ❯* 
 *✧━━ • ━ 「 ✤ 」 ━ • ━━✧*
*❄️✬⃝┇.لكرتون 』*
*❄️✬⃝┇.انمي 』*
*❄️✬⃝┇.تصميم3 』*
*❄️✬⃝┇.جوده 』*
*❄️✬⃝┇.بلاغ 』*
*❄️✬⃝┇.وهمي 』*
*❄️✬⃝┇.هديه 』*
*❄️✬⃝┇.الوقت 』*
*❄️✬⃝┇.لانمي 』*
*❄️✬⃝┇.حظي 』*
*❄️✬⃝┇.شخصية 』*
*❄️✬⃝┇.نصيحه 』*
*❄️✬⃝┇.منشني 』*
*❄️✬⃝┇.اقتباس 』*
*❄️✬⃝┇.ترجم 』*
*❄️✬⃝┇.تصميم 』*
*❄️✬⃝┇.لو 』*
*❄️✬⃝┇.حل 』*
*❄️✬⃝┇.هل 』*
*❄️✬⃝┇.حكمه 』*
*❄️✬⃝┇.خط 』*
*❄️✬⃝┇.مانهوا 』*
*❄️✬⃝┇.مانجا 』*
*❄️✬⃝┇.انطق 』*
*❄️✬⃝┇.باركود 』*
*❄️✬⃝┇.صليح 』*
*✧━━ • ━ 「 ✤ 」 ━ • ━━✧*
*〄┃اوامـر  الـترفـيـه┃↞ ❮ ✓ ❯* 
 *✧━━ • ━ 「 ✤ 」 ━ • ━━✧*
*❄️✬⃝┇.شكل 』*
*❄️✬⃝┇.عمل 』*
*❄️✬⃝┇.جنيه 』* 
*❄️✬⃝┇.لقبني 』*
*❄️✬⃝┇.قتل 』*
*❄️✬⃝┇.زوجني 』*
*❄️✬⃝┇.خروف 』*
*❄️✬⃝┇.مطلوب 』*
*❄️✬⃝┇.متفجرات 』*
*❄️✬⃝┇.جميل』*
*❄️✬⃝┇.زواج 』*
*❄️✬⃝┇.علم 』*
*❄️✬⃝┇.احزر 』*
*❄️✬⃝┇.عين 』*
*❄️✬⃝┇.تقيم 』*
*❄️✬⃝┇.سيارات 』*
*❄️✬⃝┇.طلاق 』*
*❄️✬⃝┇.بيحبني 』*
*❄️✬⃝┇.مغامره 』*
*❄️✬⃝┇.بيكرهني 』*
*❄️✬⃝┇.صداقه 』*
*❄️✬⃝┇.تاج 』*
*❄️✬⃝┇.تخمين 』*
*❄️✬⃝┇.نرد 』*
*❄️✬⃝┇.شبيهي 』*
*❄️✬⃝┇.توب 』*
*❄️✬⃝┇.اكس او 』*
*❄️✬⃝┇.ذكاء 』*
*❄️✬⃝┇.غباء 』*
*❄️✬⃝┇.كت 』*
*❄️✬⃝┇.تج 』*
*❄️✬⃝┇.رياضيات 』*
*❄️✬⃝┇.بوت 』*
*❄️✬⃝┇.ورع 』*
*❄️✬⃝┇.بوت 』*
*❄️✬⃝┇.تحدي』*
*✧━━ • ━ 「 ✤ 」 ━ • ━━✧*
*〄┃اوامـر التـحمـيل ┃↞ ❮ ✓ ❯* 
 *✧━━ • ━ 「 ✤ 」 ━ • ━━✧*
*❄️✬⃝┇.انستا 』*
*❄️✬⃝┇.فيسبوك 』*
*❄️✬⃝┇.اينمي 』*
*❄️✬⃝┇.ادت 』*
*❄️✬⃝┇.فلسطين 』*
*❄️✬⃝┇.تويتر 』*
*❄️✬⃝┇.بنترست 』*
*❄️✬⃝┇.خلفية 』*
*❄️✬⃝┇.ميديافاير 』*
*❄️✬⃝┇.يوتيوب 』*
*❄️✬⃝┇.بحث 』*
*❄️✬⃝┇.صوتي 』*
*❄️✬⃝┇.صوره 』*
*❄️✬⃝┇.شغل』*
*❄️✬⃝┇.قران 』*
*❄️✬⃝┇.المتجر 』*
*❄️✬⃝┇.تليجراف 』*
*❄️✬⃝┇.تيك 』*
*✧━━ • ━ 「 ✤ 」 ━ • ━━✧*
*〄┃اوامـر الـصـور┃ ↞ ❮ ✓ ❯*
*✧━━ • ━ 「 ✤ 」 ━ • ━━✧*
*❄️✬⃝┇.خلفية-بنات 』*
*❄️✬⃝┇.خلفية-اولاد 』*
*❄️✬⃝┇.جوجوتسو 』*
*❄️✬⃝┇.تخيل 』*
*❄️✬⃝┇.خلفيه 』*
*❄️✬⃝┇.ارسم 』*
*❄️✬⃝┇.قطه 』*
*❄️✬⃝┇.قهوه 』*
*❄️✬⃝┇.عشوائي 』*
*❄️✬⃝┇.حقيقي 』*
*❄️✬⃝┇.بنت 』*
*❄️✬⃝┇.تطقيم 』*
*❄️✬⃝┇.صوره 』*
*❄️✬⃝┇.ميسي 』*
*❄️✬⃝┇.رونالدو 』*
*❄️✬⃝┇.قدوتي 』*
*❄️✬⃝┇.مانهوو 』*
*❄️✬⃝┇.ميمز 』*
*✧━━ • ━ 「 ✤ 」 ━ • ━━✧*
*〄┃اوامـر الـلـفل┃ ↞ ❮🎖️❯*
*✧━━ • ━ 「 ✤ 」 ━ • ━━✧*
*❄️✬⃝┇.لفل 』*
*❄️✬⃝┇.بروفايل 』*
*❄️✬⃝┇.يومي 』*
*❄️✬⃝┇.رتبة 』*
*❄️✬⃝┇.بنك 』*
*❄️✬⃝┇.سرقه 』*
*❄️✬⃝┇.راتب 』*
*❄️✬⃝┇.رانك 』*
*❄️✬⃝┇.البنك 』*
*❄️✬⃝┇.تحويل 』*
*❄️✬⃝┇.اضف-اكسبي 』*
*✧━━ • ━ 「 ✤ 」 ━ • ━━✧*
*〄┃اوامـر الملصقات┃ ↞ ❮ ✓ ❯*
*✧━━ • ━ 「 ✤ 」 ━ • ━━✧*
*❄️✬⃝┇.ملصق 』*
*❄️✬⃝┇.مكس💎+💛 』*
*❄️✬⃝┇.ستك 』*
*❄️✬⃝┇.ستك2 』*
*❄️✬⃝┇.ستك3 』*
*❄️✬⃝┇.ستك4 』*
*❄️✬⃝┇.ستك5 』*
*❄️✬⃝┇.ستك6 』*
*❄️✬⃝┇.ستك7 』*
*❄️✬⃝┇.ستك8 』*
*❄️✬⃝┇.حقوق 』*
*❄️✬⃝┇.سرقة 』*
*❄️✬⃝┇.ستيكر 』*
*✧━━ • ━ 「 ✤ 」 ━ • ━━✧*
*〄┃اوامـر الأصـوات┃ ↞ ❮ ✓ ❯*
*✧━━ • ━ 「 ✤ 」 ━ • ━━✧*
*❄️✬⃝┇.لصوت 』*
*❄️✬⃝┇.عميق 』*
*❄️✬⃝┇.منفوخ』*
*❄️✬⃝┇.رفيع 』*
*❄️✬⃝┇.تخينن 』*
*❄️✬⃝┇.سنجاب 』*
*❄️✬⃝┇.ناعم 』*
*❄️✬⃝┇.تقطيع 』*
*❄️✬⃝┇.بطيء 』*
*❄️✬⃝┇.سريع 』*
*❄️✬⃝┇.صاخب 』*
*❄️✬⃝┇.روبوت 』*
*❄️✬⃝┇.تخين 』*
*❄️✬⃝┇.صوتي 』*
*✧━━ • ━ 「 ✤ 」 ━ • ━━✧*
*〄┃اوامـر دين +اسئلة┃ ↞ ❮ ✓ ❯*
*✧━━ • ━ 「 ✤ 」 ━ • ━━✧*
*❄️✬⃝┇.قرآن 』*
*❄️✬⃝┇.دين 』*
*❄️✬⃝┇.آيه 』*
*❄️✬⃝┇.سورة 』*
*❄️✬⃝┇.سؤال 』*
*❄️✬⃝┇.اسماء الله 』*
*❄️✬⃝┇.اسئلني』*
*❄️✬⃝┇.اذكار المساء 』*
*❄️✬⃝┇.اذكار الصباح 』*
*❄️✬⃝┇.آيات 』*
*✧━━ • ━ 「 ✤ 」 ━ • ━━✧*
*〄┃اوامـر فتـح البـوت┃ ↞ ❮❗❯*
*✧━━ • ━ 「 ✤ 」 ━ • ━━✧*
*❄️✬⃝┇.افتح  مضادالاخفاء 』*
*❄️✬⃝┇.افتح  مضادالحذف』*
*❄️✬⃝┇.افتح الترحيب 』*
*❄️✬⃝┇.مضاد الاسبام 』*
*❄️✬⃝┇.افتح اصوات_البوت 』*
*❄️✬⃝┇.افتح مضادالخاص 』*
*❄️✬⃝┇.افتح الجروبات 』*
*❄️✬⃝┇.افتح كشف 』*
*❄️✬⃝┇.افتح برايفت 』*
*❄️✬⃝┇.افتح الصحين 』*
*❄️✬⃝┇.افتح تقيد 』*
*❄️✬⃝┇.افتح مضاداللنكان 』*
*❄️✬⃝┇.افتح عام 』*
*❄️✬⃝┇.افتح استيكرات تلقائي 』*
*❄️✬⃝┇.افتح مضادالشتائم 』*
*✧━━ • ━ 「 ✤ 」 ━ • ━━✧*
*〄┃اوامـر الـمـطـور┃ ↞ ❮ ✓ ❯*
*✧━━ • ━ 「 ✤ 」 ━ • ━━✧*
*❄️✬⃝┇.اخرج 』*
*❄️✬⃝┇.انضم 』*
*❄️✬⃝┇.بان-شات 』*
*❄️✬⃝┇.ضيف_مميز』*
*❄️✬⃝┇.حظر 』*
*❄️✬⃝┇.البلوكات 』*
*❄️✬⃝┇.بان』*
*❄️✬⃝┇.افتح خاص 』*
*❄️✬⃝┇.ارفعني 』*
*❄️✬⃝┇.تصليح 』*
*❄️✬⃝┇.المطور 』*
*❄️✬⃝┇.نشر 』*
*❄️✬⃝┇.اطفاء 』*
*❄️✬⃝┇.تفعيل 』*
*❄️✬⃝┇.بريم 』*
*❄️✬⃝┇.اضف-اكسبي 』*
*❄️✬⃝┇.رفع_البلوك 』*
*❄️✬⃝┇.حذف_مميز 』*
*✧━━ • ━ 「 ✤ 」 ━ • ━━✧*
❯⏐ 𝐵𝛩𝑇 𝐸𝑅𝑺𝑁
*「✧|───✦❯┇💎┇❮✦───|✧」*
`.trim();

conn.sendMessage(m.chat, {
        video: { url: videoUrl }, caption: str,
  mentions: [m.sender,global.conn.user.jid],
  gifPlayback: true,gifAttribution: 0
    }, { quoted: m });
}; 
handler.help = ['maibn']
handler.tags = ['ggvsy']
handler.command = ['ميزو12'] 

export default handler
function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}

    function ucapan() {
      const time = moment.tz('Egypt').format('HH')
      let res = "بداية يوم سعيده ☀️"
      if (time >= 4) {
        res = "صباح الخير 🌄"
      }
      if (time >= 10) {
        res = "مساء الخير ☀️"
      }
      if (time >= 15) {
        res = "مساء الخير 🌇"
      }
      if (time >= 18) {
        res = "مساء الخير 🌙"
      }
      return res
      }
