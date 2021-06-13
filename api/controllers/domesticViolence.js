const _ = require('underscore');

const columnsEnum = Object.freeze({ "city":"MUNICÍPIO DO FATO", 
                                    "region":"REGIAO GEOGRÁFICA",
                                    "nature":"NATUREZA",
                                    "date":"DATA DO FATO",
                                    "year":"ANO",
                                    "sex":"SEXO",
                                    "age":"IDADE SENASP",
                                    "involved":"TOTAL DE ENVOLVIDOS"})

module.exports = app => {
    const domesticViolenceJSON = app.data.domesticViolence;
    const controller = {};

    controller.getDomesticViolence = (req, res) => {
        var domesticViolenceArray = domesticViolenceJSON[Object.keys(domesticViolenceJSON)[0]]
        var filter = domesticViolenceArray
        if (req.query.city) {
            filter = filter.filter(x => x[columnsEnum.city].toLowerCase().includes(req.query.city.toLowerCase()));
        }
        if (req.query.region) {
            filter = filter.filter(x => x[columnsEnum.region].toLowerCase() === req.query.region.toLowerCase());
        }
        if (req.query.nature) {
            filter = filter.filter(x => x[columnsEnum.nature].toLowerCase().includes(req.query.nature.toLowerCase()));
        }
        if (req.query.startDate) {
            filter = filter.filter(x => x[columnsEnum.date] >= Date.parse(req.query.startDate));
        }
        if (req.query.endDate) {
            filter = filter.filter(x => x[columnsEnum.date] <= Date.parse(req.query.endDate));
        }
        if (req.query.year) {
            filter = filter.filter(x => x[columnsEnum.year] === parseInt(req.query.year));
        }
        if (req.query.sex) {
            filter = filter.filter(x => x[columnsEnum.sex].toLowerCase() === req.query.sex.toLowerCase());
        }
        if (req.query.age) {
            filter = filter.filter(x => x[columnsEnum.age] === req.query.age);
        }
        if (req.query.involved) {
            filter = filter.filter(x => x[columnsEnum.involved] === parseInt(req.query.involved));
        }
        if (req.query.firstIndex && req.query.limit) {
            filter = filter.slice(parseInt(req.query.firstIndex),parseInt(req.query.firstIndex)+parseInt(req.query.limit))
        }

        res.status(200).json(filter);
    }

    controller.getRegions = (req, res) => {
        var domesticViolenceArray = domesticViolenceJSON[Object.keys(domesticViolenceJSON)[0]]

        var filter = domesticViolenceArray
                        .map(item => item[columnsEnum.region])
                        .filter((value, index, self) => self.indexOf(value) === index)
                
        res.status(200).json(filter);
    }

    controller.getYears = (req, res) => {
        var domesticViolenceArray = domesticViolenceJSON[Object.keys(domesticViolenceJSON)[0]]
        
        var filter = domesticViolenceArray
                        .map(item => item[columnsEnum.year])
                        .filter((value, index, self) => self.indexOf(value) === index)
                
        res.status(200).json(filter);
    }

    controller.getSex = (req, res) => {
        var domesticViolenceArray = domesticViolenceJSON[Object.keys(domesticViolenceJSON)[0]]
        
        var filter = domesticViolenceArray
                        .map(item => item[columnsEnum.sex])
                        .filter((value, index, self) => self.indexOf(value) === index)
                
        res.status(200).json(filter);
    }

    controller.getAge = (req, res) => {
        var domesticViolenceArray = domesticViolenceJSON[Object.keys(domesticViolenceJSON)[0]]
        
        var filter = domesticViolenceArray
                        .map(item => item[columnsEnum.age])
                        .filter((value, index, self) => self.indexOf(value) === index)
                
        res.status(200).json(filter);
    }

    controller.getInvolved = (req, res) => {
        var domesticViolenceArray = domesticViolenceJSON[Object.keys(domesticViolenceJSON)[0]]
        
        var filter = domesticViolenceArray
                        .map(item => item[columnsEnum.involved])
                        .filter((value, index, self) => self.indexOf(value) === index)
                
        res.status(200).json(filter);
    }

    return controller;
}