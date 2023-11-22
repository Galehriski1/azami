let handler = async (m, { conn, command }) => {
	conn.reply(m.chat, `*Bayar Owner 1 Juta dulu!*`, m)
}

handler.command = /^(sc|sourcecode)$/i

export default handler
