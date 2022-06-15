const player = require("../client/player");

module.exports = {
    name: "pause",
    description: "Oynatılan Şarkıyı Durdurur Ve Sıradaki Şarkıyı Durdurur.",options:[],
    run: async (client, interaction) => {
        const queue = player.getQueue(interaction.guildId);

        queue.setPaused(true);

        return interaction.reply({ content: "Şarkı Durduruldu." });
    },
};
