const Contact = require('../models/ContactModel');

exports.index = (req, res) => {
  res.render('contact', { contact: {} });
};

exports.create = async function(req, res) {
  try {
    const contact = new Contact(req.body);
    await contact.create();

    if (contact.errors.length > 0) {
      req.flash('errors', contact.errors);
      req.session.save(() => res.redirect(req.get('Referer') || '/contact/index'));
      return;
    }

    req.flash('successes', 'Contact created successfully');
    req.session.save(() => res.redirect(`/contact/index/${contact.contact._id}`));
  } catch (e) {
    console.error('Error creating contact:', e);
    res.render('404');
  }
};

exports.editIndex = async function(req, res) {
  if (!req.params.id) return res.render('404');

  try {
    const contact = await Contact.getContactById(req.params.id);

    if (!contact) return res.render('404');

    res.render('contact', { contact });
  } catch (e) {
    console.error('Error fetching contact:', e);
    res.render('404');
  }
};

exports.edit = async function(req, res) {
  if (!req.params.id) return res.render('404');
  try {
    const contact = new Contact(req.body);
    await contact.edit(req.params.id);

    if (contact.errors.length > 0) {
      req.flash('errors', contact.errors);
      req.session.save(() => res.redirect(req.get('Referer') || '/contact/index'));
      return;
    }

    req.flash('successes', 'Contact edited successfully');
    req.session.save(() => res.redirect(`/`));
  } catch (e) {
    console.error('Error editing contact:', e);
    res.render('404');
  }
};

exports.delete = async function(req, res) {

  if (!req.params.id) return res.render('404');

  try {
    const contact = await Contact.deleteById(req.params.id);

    if (!contact) return res.render('404');

    req.flash('successes', 'Contact delete successfully');
    req.session.save(() => res.redirect(`/`));
  } catch (e) {
    console.error('Error fetching contact:', e);
    res.render('404');
  }
};


