const Login_Api = `https://argus.work/argus/api/v1/auth/login`;
const GetUserData_Api = `https://argus.work/argus/api/v1/auth/user-profile`;

const MainApi = "https://api.hinduhope.com/api/v1/data";
const Source_API = `https://argus.work/argus/api/v1/data`;

export const playgames =
  "https://api.hinduhope.com/api/v1/data/showWeb?groups_Type=playgames";

function getDay(day) {
  let today = new Date();
  let targetday_milliseconds = today.getTime() + 1000 * 60 * 60 * 24 * day;
  today.setTime(targetday_milliseconds); //關鍵代碼

  let tYear = today.getFullYear();
  let tMonth = today.getMonth();
  let tDate = today.getDate();
  tMonth = doHandleMonth(tMonth + 1);
  tDate = doHandleMonth(tDate);
  return tYear + "-" + tMonth + "-" + tDate;
}

function doHandleMonth(month) {
  let m = month;
  if (month.toString().length === 1) {
    m = "0" + month;
  }
  return m;
}

const sourse =
  "anntw,anue,chinatimes,cmmedia,cna,ctee,ebc,epochtimes,ettoday,ftv,gvm,hinet,ltn,mirrormedia,newtalk,nownews,rti,setn,storm,thenewslens,ttv,tvbs,udn,upmedia,yahoo,yam";

let nowDate = getDay(0);
let LastNowDate = getDay(-15);

export const TodayBaseballApi = `${Source_API}?key=棒球&start_date=${nowDate}&end_date=${nowDate}&crawler_Web=${sourse}`;
export const TodayBasketballApi = `${Source_API}?key=籃球&start_date=${nowDate}&end_date=${nowDate}&crawler_Web=${sourse}`;
export const TodayFootballApi = `${Source_API}?key=足球&start_date=${nowDate}&end_date=${nowDate}&crawler_Web=${sourse}`;
export const TodayTennisApi = `${Source_API}?key=網球&start_date=${nowDate}&end_date=${nowDate}&crawler_Web=${sourse}`;
export const TodayVolleyballApi = `${Source_API}?key=排球&start_date=${nowDate}&end_date=${nowDate}&crawler_Web=${sourse}`;
export const TodayOtherApi = `${Source_API}?key=運動&start_date=${nowDate}&end_date=${nowDate}&crawler_Web=${sourse}`;

export const BaseballApi = `${Source_API}?key=棒球&start_date=${LastNowDate}&end_date=${nowDate}&crawler_Web=${sourse}`;
export const BasketballApi = `${Source_API}?key=籃球&start_date=${LastNowDate}&end_date=${nowDate}&crawler_Web=${sourse}`;
export const FootballApi = `${Source_API}?key=足球&start_date=${LastNowDate}&end_date=${nowDate}&crawler_Web=${sourse}`;
export const TennisApi = `${Source_API}?key=網球&start_date=${LastNowDate}&end_date=${nowDate}&crawler_Web=${sourse}`;
export const VolleyballApi = `${Source_API}?key=排球&start_date=${LastNowDate}&end_date=${nowDate}&crawler_Web=${sourse}`;
export const OtherApi = `${Source_API}?key=運動&start_date=${LastNowDate}&end_date=${nowDate}&crawler_Web=${sourse}`;

export const AloneApi = (id) => {
  return `${Source_API}/${id}`;
};

export function LoginApi(account, password) {
  let data = new FormData();
  data.append("email", account);
  data.append("password", password);
  return fetch(`${Login_Api}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
    },
    body: data,
  });
}

export const FirstCheckUser = (token) => {
  return fetch(GetUserData_Api, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
