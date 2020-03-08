// index(mostra todas as sessões), show(mostra uma sessão específica), store(cria sessão), update, destroy;
const User = require('../models/User')

module.exports = {
    async store(req, res) {
        const { email } = req.body

        let user = await User.findOne({ email });

        if (!user) {
            user = await User.create({ email });
        }

        res.json(user);
    }

}