import MessageType from '@whiskeysockets/baileys';
import _translate from "./_translate.js"
const tradutor = _translate.plugins.game_delttt

const handler = async (m, {conn, usedPrefix, command}) => {
  const room = Object.values(conn.game).find((room) => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender));
  if (room == undefined) return conn.sendButton(m.chat, tradutor.texto1, wm, null, [[tradutor.texto2, `${usedPrefix}ttt ${tradutor.texto3}`]], m);
  delete conn.game[room.id];
  await m.reply(tradutor.texto4);
};
handler.command = /^(delttt|deltt|delxo|deltictactoe)$/i;
handler.fail = null;
export default handler;
