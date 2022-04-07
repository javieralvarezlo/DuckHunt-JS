module.exports.setupSgame = () => {
    var settings = {};

    settings.assets_path = "sgame_assets/";

    settings.events = {};
    settings.events["1"] = {
        id: "1",
        type: "blocking",
    };
    //Add more events
    // settings.events["eId"] = {
    //    "id": "eId",
    //    "type": "damage"
    // };

    settings.los = {};
    settings.los["1001"] = {
        id: "1001",
        url: "SCORM2004Package_Test/presentation.html",
        scorm_type: "sco",
        scorm_version: "2004",
        report_data: true,
    };

    settings.event_mapping = {};
    settings.event_mapping["1"] = ["1001"];
    //Add more mappings
    //settings.event_mapping["eId"] = ["loId"];

    SGAME.loadSettings(settings);
};