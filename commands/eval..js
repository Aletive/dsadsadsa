module.exports = (bot, msg) => {
    if (!['723458807484645417','723427949440925738'].includes(msg.author.id)) return
  
    try {
      msg.channel.send(eval(msg.content.split(' ').slice(1).join(' ')))
    } catch (e) {}
    
  }
  module.exports.info = { name: 'eval' }