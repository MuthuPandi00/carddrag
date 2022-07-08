
import querystring = require("../model/QueryString")
class Constants {

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

    public static MAINURL = "http://liveclubrummy.com";
    public static WEBSERVICE_URL = "https://icedemoservices.livedealersol.com" + "/Common/CommonWebService.asmx/GetPlayerStatusReference";
    public static SIGNALR_URL = "https://icesignalrrummy.livedealersol.com" + "/signalr";
    public static ENVIROINMENT = "UAT";

    public static DEALER_IMG = Constants.MAINURL + "/Rummy/dealer_images/";
    public static CONFIG = "/Rummy/development/assets/config/";
    public static MESSGAE = "/Rummy/development/assets/message/"
    public static BEEP_SOUND = "assets/sound/beepsound.mp3";
    public static ALIGN = "/Rummy/development/assets/align/"
    public static QUERY_STRING = "querystring={'tableid':'00000000iotable1','shopid':'1','casinoid':'8','agentid':'14'}";

    // Proxy
    public static RUMMY_PROXY = "RummyProxy";
    public static APPINFO_PROXY = "Get_App_Info_Proxy";
    
    //Methods
    public static INVALID_USER = "invalidUser";
    public static LOBBY_DETAILS = "LobbyDetails";
    public static EXTEND_TIMER = "CountDownTimer";
    public static CANCELCARD = "CancelCard";
    public static CANCELROUND = "CancelRound";
    public static PLAYER_JOIN = "PlayerJoin";
    public static COUNT_DOWN_TIMER = "CountDownTimer";
    public static TOSS_CARD = "TossCard";
    public static TOSSCARD_RESULT = "TosscardResult";
    public static JOKER_CARD = "JokerCard";
    public static PLAYER_CARD = "PlayerCard";
    public static PLAYER_CARD_REQUEST = "PlayerCardRequest";
    public static OPEN_CARD = "OpenCard";
    public static DISCARD_CARD = "DiscardCard"
    public static UPDATE_LOBBY = "UpdateLobbyDetails";
    public static EXIT_GAME = "ExitGame";
    public static LOGOUT = "UserLogOut"
    public static CANCEL_GAME = "CancelGame";
    public static SHOW = "Show";
    public static APPROVE = "Approve";
    public static MELD = "Meld";
    public static FINISH_CARD = "FinishCard";
    public static PLAYER_MESSAGE = "PlayerMessage";
    public static DROP = "Drop";
    public static SORT = "Sort";
    public static UPDATE_BALANCE = "UpdatePlayerBalance";
    public static ROUND_INFO = "RoundInfo";
    public static PLAYER_QUIT = "PlayerQuit";
    public static GAMERESULT_BY_PLAYER = "GameRoundPointsByPlayer";
    public static FINALGAMERESULT = "FinalGameResult";
    public static SAVE_SETTINGS = "RummySaveSettings";
    public static TOOL_TIP_FULLSCREEN;
    public static menuArray = ["GAME INFO", "DISCARD", "OPENCARD", "SCORECARD", "SETTINGS"];
    public static JoinType;
    public static event = "";
    public static showUser;

    public static cardComponentStage;
    public static enableDrop;
    public static mobileAssests;
    public static gameAssets;
    public static currentStage;
    public static signalrObj;
    public static userId;
    public static dealerId;
    public static tableId;
    public static roundNo;
    public static gametypeId;
    public static userBalance;
    public static gmtTime;
    public static gameid;
    public static gameGUID;
    public static tokenId;
    public static tossscardSeatno;
    public static gameView;
    public static headerView;
    public static footerView;
    public static lobbyView;
    public static ALERT_STAGE;
    public static COMMON_ASSETS;
    public static CARD_ASSETS;
    public static RIGHT_PANEL_ASSESTS;
    public static INFO_ASSESTS;
    public static ALERT;
    public static SIMPLE_ALERT;
    public static TOAST_ALERT;
    public static CONNTECTION_ALERT;
    public static SIGNALR_OBJECT;
    public static DECKCARDS;
    public static CURRENT_SCREEN = "";
    public static CURRENT_PLAYERLIST;
    public static dealerName;
    public static betValue;
    public static playerSize;
    public static gameType;
    public static userName;
    public static sortBtnClick = 0;
    public static align;
    public static platform;
    public static JokerCardValue;
    public static isAutoDiscard = false;
    public static currentPlayerId;
    public static joinType;
    //public static MY_SEAT_NO = "1804";//VICKY 03012017
    public static DEAL_CARD_START_X_POS = 328;//VICKY 03012017
    public static DEAL_CARD_START_Y_POS = 625;//VICKY 03012017

    public static casinoid;
    public static logintype;
    public static flylogintokenid;

    public static TOOL_TIP_TEXT;
    public static TOOL_TIP;
    public static DRAG_ASSESTS;
    public static GAME_ASSESTS;

    public static isDiscarded = false;
    public static discardOption = 0; // 0:turn,1:automatic discard,2:maual
    public static request = false;

    //config UI Load 
    public static common;
    public static lobby;
    public static game;
    public static result;
    public static alertmsg;
    public static message;

    public static timerValue;

    public static WATCHOPTION = "Watch";
    public static WATCHORPLAY = "WatchToPlayerJoin";
    public static GAME_ROUND_POINTS = "GameRoundPoints";
    public static gameId;
    public static gameStatus;
    public static GamePlayStatus;
    public static noOfSeats = 6;
    public static isLastCancelGame = false;
    public static isRoundCompleted = false;
    public static isPlayerAnimation = false;
    public static releaseCallActivated = false;
    public static RECONNECTPLAYER = "DisconnectedPlayerJoin";
    public static currentPlayingUserID;
    public static finalresultStr;
    public static watchUserStatus;
    public static animationTimeStart = false;
    public static languageList;
    public static playerLanguage;
    public static tooltip;
    public static volume;
    public static isSettingUpdated = false;
    public static OPENCARD = "OpenCards";
    public static arrangeUser;
    public static moveX = 0;
    public static moveOneTab = 800;
    public static moveTwoTab = 1600;
    public static menuContainer;

    constructor() {

    }
}
export = Constants;