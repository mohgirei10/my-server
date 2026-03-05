let http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World! Welcome to Moha-Server, Passionate about creating intuitive and engaging UI-UX. Specialize in transforming ideas into beautifully crafted products, you will get a glimpse of my journey in the world of web development, where creativity meets functionality. A Software developer who has developed countless innovative solutions. Showcasing my creative journey through innovative design and development. Explore my projects, from sleek web interfaces to dynamic applications, crafted with passion and precision. Connect with me to bring your ideas to life!'
    );
}).listen(8088);
console.log('Moha-Server running at http://localhost:8088/');