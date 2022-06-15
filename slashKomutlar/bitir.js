const player = require("../client/player");

module.exports = {
    name: "stop",
    description: "Oynatılan Şarkıyı Bitirir Veya Sıradaki Şarkıyı Bitirir",options:[],
    run: async (client, interaction) => {
        const queue = player.getQueue(interaction.guildId);

        queue.stop();

        return interaction.reply({ content: "Şarkı Bitirildi" });
    },
};
