const { MessageEmbed } = require('discord.js')

module.exports = (bot, msg) => {
  const { channel } = msg


  channel.send(

    new MessageEmbed()
      .setTitle('도움말')
      .setDescription('메리엘의 도움말을 불러왔습니다.')
      .setColor(Math.floor(Math.random() * 0xffffff))
      .addField('/도움말','메리엘이 명령어를 들고와요!')
      .setFooter('이용해주셔서 감사합니다.')
  )
}
module.exports.info = { name: '도움말' }