const Login_Api = `https://argus.work/argus/api/v1/auth/login`;
const GetUserData_Api = `https://argus.work/argus/api/v1/auth/user-profile`;

const main_api = `https://sportfun.tw/sportfun/api/v1/data`;

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

let nowDate = getDay(0);
let LastNowDate = getDay(-10);

export const AloneApi = (id) => {
  return `${main_api}/${id}`;
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

export const SourceApi = `${main_api}/showWeb`;

export function NewsApi(sourse, name) {
  return `${main_api}?start_date=${LastNowDate}&end_date=${nowDate}&crawler_Web=${sourse}&crawler_Cate=${name}`;
}
