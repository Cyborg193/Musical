const player = require("../client/player");

module.exports = {
    name: "skip",
    description: "Oynatılan Şarkıyı Atlar Veya Sıradaki Şarkıya Atlar",
    options:[],
    run: async (client, interaction, args) => {
        const queue = player.getQueue(interaction.guildId);
        if (!queue?.playing)
            return interaction.reply({
                content: "Oynatılan Şarkı Bulunamadı",
            });

        await queue.skip();

        interaction.reply({ content: "Şarkı Atlandı" });
    },
};
