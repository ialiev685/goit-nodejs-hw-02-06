const Contact = require("../schemas/contact");

const listContacts = async (page, limit, favorite) => {
  try {
    const data = await Contact.find();
    // const data = favorite
    //   ? await Contact.paginate({ favorite }, { page, limit })
    //   : await Contact.paginate({}, { page, limit })

    return data;
  } catch (error) {
    console.table(error);
  }
};

module.exports = listContacts;
