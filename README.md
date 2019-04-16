# ext-slider-widget

This extension provides a image slider widget.

The widget is configurable in regards of amount of slides and items on the slides.

## Configuration

If you want to use the image slider widget, you can create a HTML widget with following content:

```json
<!--Widget
{
  "type": "@shopgate/ext-slider-widget/SliderWidget",
  "settings": {
    "headline": "Some Headline",
    "slides": [
      [
        {
          "img": "image-url.jpeg",
          "link": "url"
        },
        {
          "img": "image-url.jpeg",
          "link": "url"
        }
      ],
      [
        {
          "img": "image-url.jpeg",
          "link": "url"
        }
      ],
      [
        "image-url.jpeg"
      ]
    ]
  }
}
-->
```

Settings:

- headline (optional): Define a headline.
- slides: Provide an array per slide. The array can contain any amount of items.

Use the "img" and "link" tag to define the image url and an url to which the image should lead on click.

You can also just provide an image-url without the image tag, if you just want to show an image slide.

## About Shopgate

Shopgate is the leading mobile commerce platform.

Shopgate offers everything online retailers need to be successful in mobile. Our leading
software-as-a-service (SaaS) enables online stores to easily create, maintain and optimize native
apps and mobile websites for the iPhone, iPad, Android smartphones and tablets.
