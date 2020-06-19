module.exports = (bot, msg) => {
    msg.channel.send('퐁! ' + bot.ws.ping + 'ms')
  }
  module.exports.info = { name: '핑' }