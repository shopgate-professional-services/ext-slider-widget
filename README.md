# Shopgate Connect - Extension Slider-Widget

This extension provides a image slider widget.

The widget is configurable in regards of amount of slides and items on the slides.

## Configuration

If you want to use the image slider widget, you can create a HTML widget with following content:

```html
<!--Widget
{
  "type":"@shopgate-project/slider-widget/SliderWidget",
  "settings": {
    "headline": "Some Headline",
    "autoplay": true,
    "loop": false,
    "slidesPerView": 2.3,
    "indicators": false,
    "slides": [
      {
        "img": "image-url-1.jpeg",
        "link": "url"
      },
      {
        "img": "image-url-2.jpeg",
        "link": "url"
      },
      {
        "img": "image-url-3.jpeg",
        "iOSLink": "url-ios",
        "androidLink": "url-android"
      },
      {
        "img": "image-url-4.jpeg",
        "link": "url-will-be-ignored",
        "iOSLink": "url-ios",
        "androidLink": "url-android"
      },
      {
        "img": "image-url-5.jpeg"
      }
    ]
  }
}
```



You can also specify only an array of image URLs if you only want to display images.

```html
<!--Widget
{
  "type": "@shopgate-project/ext-slider-widget/SliderWidget",
  "settings": {
    "headline": "",
    "autoplay": true,
    "loop": false,
    "slidesPerView": 3,
    "indicators": true,
    "slides":[
      "image-url-1.jpeg",
      "image-url-2.jpeg",
      "image-url-3.jpeg",
      "image-url-4.jpeg",
      "image-url-5.jpeg",
      "image-url-6.jpeg",
    ]
  }
}
-->
```

Settings:

- headline (optional): Define a headline.
- autoplay (optional): `true` / `false` to autoplay the slider.
- loop (optional): `true` / `false` to loop the slider
- slides: Provide an array per slide. The array can contain any amount of items.
- slidesPerView (optional): Number of slides per view (slides visible at the same time on slider’s container). Is always `1` if `loop` is set to `true`.
- indicators (optional): `true` / `false` to show pagination (e.g. bullets)

Use the `img` and `link` tag to define the image url and url to which the image should lead on click. Set `iosLink` and `androidLink` to use topic-specific links (e.g. `"/browse"` on iOS and `"/categories"` on Android).

## About Shopgate

Shopgate is the leading mobile commerce platform.

Shopgate offers everything online retailers need to be successful in mobile. Our leading
software-as-a-service (SaaS) enables online stores to easily create, maintain and optimize native
apps and mobile websites for the iPhone, iPad, Android smartphones and tablets.
