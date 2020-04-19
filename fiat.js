$('.multiple-items').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow:('.priv-sl'),
    nextArrow:('.next-sl'),
    responsive: [
{
breakpoint: 768,
settings: {
arrows: false,
centerMode: true,
centerPadding: '40px',
slidesToShow: 1
}
},
{
breakpoint: 480,
settings: {
arrows: false,
centerMode: true,
centerPadding: '40px',
slidesToShow: 1
}
}
]
});