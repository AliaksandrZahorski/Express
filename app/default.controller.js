exports.anyRequest = (req, res) => {
    res.render(
        'index',
        { title: 'ThothSays', message: 'Greetings to you, mortal!'}
      );
};
