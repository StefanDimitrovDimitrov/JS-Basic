function timeInTheSummer(count_pages, pages_in_hour, num_days) {
    count_pages = Number(count_pages);
    pages_in_hour = Number(pages_in_hour);
    num_days = Number(num_days);

    let time_for_read_a_book = count_pages/pages_in_hour;
    let result = time_for_read_a_book/ num_days;
    console.log(result);
}

timeInTheSummer("212","20","2")
