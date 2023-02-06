import moment from "moment";

export const momentConfig = moment.locale(
    'pt-BR',
    {
        relativeTime : {
            past: "%s atrás",
            s : 'poucos segundos',
            ss: '%d segundos',
            m:  "um minuto",
            mm: "%d minutos",
            h:  "uma hora",
            hh: "%d horas",
            d:  "um dia",
            dd: "%d dias",
            w:  "uma semana",
            ww: "%d semanas",
            M:  "um mês",
            MM: "%d meses",
            y:  "um ano",
            yy: "%d anos"
        }
    }
)
