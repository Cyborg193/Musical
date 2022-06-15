const player = require("../client/player");

module.exports = {
    name: "resume",
    description: "Durdurulan Şarkıyı Devam Ettirir Veya Sıradaki Şarkıyı Devam Ettirir.",
    options:[],
    run: async (client, interaction) => {
        const queue = player.getQueue(interaction.guildId);

        if(queue.setPaused == false){
            interaction.reply({content:"Durdurulan Şarkı Bulunamadı"})
        }
        else{
            queue.setPaused(false);
        }
        

        return interaction.reply({ content: "Şarkı Oynatılıyor." });
    },
};
