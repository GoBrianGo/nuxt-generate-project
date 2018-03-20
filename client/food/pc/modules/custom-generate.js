module.exports = function() {
    this.nuxt.hook('generate:extendRoutes', async routes => {
        console.log(this.options);
        routes.forEach((route, index) => {
            route.payload = this.options.query
        })
        const deleteLength = routes.length / 2;
        routes.splice(deleteLength, deleteLength)

        console.log(routes)
        //  for (let i = 0; i < routes.length; i++) {
        //  	if (routes[i].route.indexOf('index.html') === -1) {
        //  		whiteList.push(routes[i].route);
        //  	}
        //  }
        //  console.log(whiteList);
        //  const routesToGenerate = routes.filter(page => whiteList.includes(page.route));
        //  routes.splice(0, routes.length, ...routesToGenerate);
        // console.log(routes);
    });
};