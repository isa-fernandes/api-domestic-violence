module.exports = app => {
    const controller = app.controllers.domesticViolence;

    app.route('/api/domestic-violence')
        .get(controller.getDomesticViolence);
    
    app.route('/api/regions')
        .get(controller.getRegions);

    app.route('/api/years')
        .get(controller.getYears);
    
    app.route('/api/sex')
        .get(controller.getSex);
    
    app.route('/api/age')
        .get(controller.getAge);
    
    app.route('/api/involved')
        .get(controller.getInvolved);
}