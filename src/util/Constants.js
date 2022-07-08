define(["require", "exports"], function (require, exports) {
    var Constants = (function () {
        function Constants() {
        }
        //UAT - http://demouat.livedealersol.com - icedemoservices - icesignalrrummy - UAT
        //Live - http://iosrvuat.livedealersol.com - 
        //Demo -  http://RedimGamesDemo.redim.net -  RedimGamesServicesDemo -  RedimGamesSignalRDemo - Demo
        //CommonWallet -  http://pmso22.redim.net -  RedimGamesServicesDemo -  RedimGamesSignalRDemo - CommonWallet
        //Stage - http://redimgamesclientstg.redim.net - redimgamesservicesstg - redimgamessignalrstg - Stage
        //Test - http://redimgamesclienttest.redim.net - redimgamesservicestest - redimgamessignalrtest - Test
        //Dev - http://redimgamesclient.redim.net - redimgamesservices  -   redimgamessignalr - Dev
        //Test2 - http://pmso22.redim.net - redimgamesservices - redimgamessignalr - Test2
        // public static MAINURL = "http://RedimGamesDemo.redim.net";
        // //public static WEBSERVICE_URL = "http://redimgamesservicestest.redim.net" + "/Common/CommonWebService.asmx/GetPlayer_status_reference_dontdelete"
        // public static WEBSERVICE_URL = "http://RedimGamesServicesDemo.redim.net" + "/Common/CommonWebService.asmx/GetPlayerStatusReference"
        // public static SIGNALR_URL = "http://RedimGamesSignalRDemo.redim.net" + "/signalr"
        // public static ENVIROINMENT = "Demo";
        //     public static MAINURL = "http://demouat.livedealersol.com";
        //    // public static MAINURL = "https://ab.giogaming.com";
        //     public static WEBSERVICE_URL = "https://icedemoservices.livedealersol.com" + "/Common/CommonWebService.asmx/GetPlayer_status_reference_dontdelete"
        //     public static SIGNALR_URL = "https://icesignalrrummy.livedealersol.com" + "/signalr"
        //     public static ENVIROINMENT = "UAT";
        //public static WEBSERVICE_URL = "http://iosrvuat.livedealersol.com" + "/Common/CommonWebService.asmx/GetPlayer_status_reference_dontdelete"
        //public static SIGNALR_URL = "http://srsuat.livedealersol.com" + "/signalr"
        Constants.MAINURL = "https://rummyui.redimstg.com";
        Constants.WEBSERVICE_URL = "https://rummy.redimstg.com" + "/Common/CommonWebService.asmx/GetPlayerStatusReference";
        Constants.SIGNALR_URL = "https://rummysignalr.redimstg.com" + "/signalr";
        Constants.ENVIROINMENT = "UAT";
        Constants.DEALER_IMG = Constants.MAINURL + "/Rummy/dealer_images/";
        Constants.CONFIG = "/Rummy/development/assets/config/";
        Constants.MESSGAE = "/Rummy/development/assets/message/";
        Constants.BEEP_SOUND = "assets/sound/beepsound.mp3";
        Constants.ALIGN = "/Rummy/development/assets/align/";
        Constants.QUERY_STRING = "querystring={'tableid':'00000000iotable1','shopid':'1','casinoid':'8','agentid':'14'}";
        // Proxy
        Constants.RUMMY_PROXY = "RummyProxy";
        Constants.APPINFO_PROXY = "Get_App_Info_Proxy";
        //Methods
        Constants.INVALID_USER = "invalidUser";
        Constants.LOBBY_DETAILS = "LobbyDetails";
        Constants.EXTEND_TIMER = "CountDownTimer";
        Constants.CANCELCARD = "CancelCard";
        Constants.CANCELROUND = "CancelRound";
        Constants.PLAYER_JOIN = "PlayerJoin";
        Constants.COUNT_DOWN_TIMER = "CountDownTimer";
        Constants.TOSS_CARD = "TossCard";
        Constants.TOSSCARD_RESULT = "TosscardResult";
        Constants.JOKER_CARD = "JokerCard";
        Constants.PLAYER_CARD = "PlayerCard";
        Constants.PLAYER_CARD_REQUEST = "PlayerCardRequest";
        Constants.OPEN_CARD = "OpenCard";
        Constants.DISCARD_CARD = "DiscardCard";
        Constants.UPDATE_LOBBY = "UpdateLobbyDetails";
        Constants.EXIT_GAME = "ExitGame";
        Constants.LOGOUT = "UserLogOut";
        Constants.CANCEL_GAME = "CancelGame";
        Constants.SHOW = "Show";
        Constants.APPROVE = "Approve";
        Constants.MELD = "Meld";
        Constants.FINISH_CARD = "FinishCard";
        Constants.PLAYER_MESSAGE = "PlayerMessage";
        Constants.DROP = "Drop";
        Constants.SORT = "Sort";
        Constants.UPDATE_BALANCE = "UpdatePlayerBalance";
        Constants.ROUND_INFO = "RoundInfo";
        Constants.PLAYER_QUIT = "PlayerQuit";
        Constants.GAMERESULT_BY_PLAYER = "GameRoundPointsByPlayer";
        Constants.FINALGAMERESULT = "FinalGameResult";
        Constants.SAVE_SETTINGS = "RummySaveSettings";
        Constants.menuArray = ["GAME INFO", "DISCARD", "OPENCARD", "SCORECARD", "SETTINGS"];
        Constants.event = "";
        Constants.CURRENT_SCREEN = "";
        Constants.sortBtnClick = 0;
        Constants.isAutoDiscard = false;
        //public static MY_SEAT_NO = "1804";//VICKY 03012017
        Constants.DEAL_CARD_START_X_POS = 328; //VICKY 03012017
        Constants.DEAL_CARD_START_Y_POS = 625; //VICKY 03012017
        Constants.isDiscarded = false;
        Constants.discardOption = 0; // 0:turn,1:automatic discard,2:maual
        Constants.request = false;
        Constants.WATCHOPTION = "Watch";
        Constants.WATCHORPLAY = "WatchToPlayerJoin";
        Constants.GAME_ROUND_POINTS = "GameRoundPoints";
        Constants.noOfSeats = 6;
        Constants.isLastCancelGame = false;
        Constants.isRoundCompleted = false;
        Constants.isPlayerAnimation = false;
        Constants.releaseCallActivated = false;
        Constants.RECONNECTPLAYER = "DisconnectedPlayerJoin";
        Constants.animationTimeStart = false;
        Constants.isSettingUpdated = false;
        Constants.OPENCARD = "OpenCards";
        Constants.moveX = 0;
        Constants.moveOneTab = 800;
        Constants.moveTwoTab = 1600;
        return Constants;
    })();
    return Constants;
});
//# sourceMappingURL=Constants.js.map