import { i18n } from "@/i18n";

function getParams() {
  const months = [
    i18n.global.t("message.jan"),
    i18n.global.t("message.feb"),
    i18n.global.t("message.mar"),
    i18n.global.t("message.april"),
    i18n.global.t("message.may"),
    i18n.global.t("message.jun"),
    i18n.global.t("message.jul"),
    i18n.global.t("message.aug"),
    i18n.global.t("message.sep"),
    i18n.global.t("message.oct"),
    i18n.global.t("message.nov"),
    i18n.global.t("message.dec")
  ];

  const sec = 1000;
  const min = 60 * sec;
  const hour = min * 60;
  const day = hour * 24;
  const days = 30 * day;

  const one_s = i18n.global.t("message.one_s");
  const one_s_in = i18n.global.t("message.one_s_in");
  const many_s = i18n.global.t("message.many_s");
  const many_s_in = i18n.global.t("message.many_s_in");

  const one_m = i18n.global.t("message.one_m");
  const one_m_in = i18n.global.t("message.one_m");
  const many_m = i18n.global.t("message.many_m");
  const many_m_in = i18n.global.t("message.many_m_in");

  const one_h = i18n.global.t("message.one_h");
  const one_h_in = i18n.global.t("message.one_h_in");
  const many_h = i18n.global.t("message.many_h");
  const many_h_in = i18n.global.t("message.many_h_in");

  const one_d = i18n.global.t("message.one_d");
  const one_d_in = i18n.global.t("message.one_d_in");
  const many_d = i18n.global.t("message.many_d");
  const many_d_in = i18n.global.t("message.many_d");

  return {
    months,
    sec,
    min,
    hour,
    day,
    days,
    one_s,
    one_s_in,
    many_s,
    many_s_in,
    one_m,
    one_m_in,
    many_m,
    many_m_in,
    one_h,
    one_h_in,
    many_h,
    many_h_in,
    one_d,
    one_d_in,
    many_d,
    many_d_in
  };
}

export function datePraser(dateTime: string, future = false) {
  const {
    months,
    sec,
    min,
    hour,
    day,
    days,
    one_s,
    one_s_in,
    many_s,
    many_s_in,
    one_m,
    one_m_in,
    many_m,
    many_m_in,
    one_h,
    one_h_in,
    many_h,
    many_h_in,
    one_d,
    one_d_in,
    many_d,
    many_d_in
  } = getParams();

  const time = new Date(dateTime);
  const currentDate = new Date();
  const diff = time.getTime() - currentDate.getTime();

  if (diff < 0) {
    return one_s;
  }

  if (diff < min) {
    const time = Math.floor(diff / sec);
    if (time <= 1) {
      return future ? one_s_in : one_s;
    }
    return `${time} ${future ? many_s_in : many_s}`;
  }

  if (diff < hour) {
    const time = Math.floor(diff / min);
    if (time <= 1) {
      return future ? one_m_in : one_m;
    }
    return `${time} ${future ? many_m_in : many_m}`;
  }

  if (diff < day) {
    const time = Math.floor(diff / hour);
    if (time <= 1) {
      return future ? one_h_in : one_h;
    }
    return `${time} ${future ? many_h_in : many_h}`;
  }

  if (diff < days) {
    const time = Math.floor(diff / day);
    if (time <= 1) {
      return future ? one_d_in : one_d;
    }
    return `${time} ${future ? many_d_in : many_d}`;
  }

  const m = months[time.getMonth()];
  const date = `${time.getDate()}`;
  const year = time.getFullYear();

  return `${m} ${date}, ${year}`;
}

export function getCreatedAtForHuman(createdAt: Date | null) {
  const { months, sec, min, hour, day, one_s, many_s, one_m, many_m, one_h, many_h } = getParams();

  if (createdAt == null) {
    return null;
  }

  let currentDate = new Date();
  let diff = currentDate.getTime() - (createdAt as Date).getTime();

  if (diff < 0) {
    return one_s;
  }

  if (diff < min) {
    let time = Math.floor(diff / sec);
    if (time <= 1) {
      return one_s;
    }
    return `${time} ${many_s}`;
  }
  if (diff < hour) {
    let time = Math.floor(diff / min);
    if (time <= 1) {
      return one_m;
    }
    return `${time} ${many_m}`;
  }

  if (diff < day) {
    let time = Math.floor(diff / hour);
    if (time <= 1) {
      return one_h;
    }
    return `${time} ${many_h}`;
  }

  const m = months[(createdAt as Date).getMonth()];
  const date = `${(createdAt as Date).getDate()}`;
  const year = (createdAt as Date).getFullYear();

  return `${m} ${date}, ${year}`;
}

export function formatDateTime(dateTime: string | null) {
  if (dateTime === null) {
    return false;
  }

  const time = new Date(dateTime);
  const { months } = getParams();

  const m = months[time.getMonth()];
  const date = `${time.getDate()}`;
  const year = time.getFullYear();
  const timeString = time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  return `${m} ${date}, ${year} ${timeString}`;
}
