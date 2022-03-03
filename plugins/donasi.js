let handler = async m => m.reply(`
{ *Donasi* }
╭╡JANGAN LUPA DONASI BIAR BOT SELALU ONLINE!!
│┝‷✧ *Pulsa:* 085828764046
│┝‷✧ *Dana:* 085828764046
│┝‷✧ *Gopay:* 085828764046
│╰───···─────
│⁺◛˖ Ingin Donasi? Chat nomor dibawah
╰──────────···───http://Wa.me/6285828764046`
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
