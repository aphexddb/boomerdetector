# boomerdetector

Detect if you have encountered text authored by a Boomer.

## How does this work?

Know your boomer. They often put two spaces after ending a sentence. 

Example boomer text:

```txt
"Elissa, this is mom not Bob.  What did you post this here?  Are you going to Aunt Cindy’s for Gina’s birthday party?  I will bring the macaroni salad.  Love, Mom"
```

People who grew up with computers use a single space:

```txt
"Boomers LOVE the noises their phones make. I have to sit here and listen to this dude fuck around on Facebook and play candy crush."

"Did you see his Instagram post about how much he loves his girlfriend? He’s such a simp."
```

Have pity, boomers live in an [information hellscape](https://www.nytimes.com/2020/11/24/opinion/facebook-disinformation-boomers.html) according to the NY Times. Optionally, use this package to read text and respond with "[ok boomer](https://www.youtube.com/watch?v=OxJsPXrEqCI)".

## Usage

```sh
npm install --save boomerdetector
```

```js
import boomerdetector from 'boomerdetector';

const isBoomer = boomerdetector("Elissa, this is mom not Bob.  What did you post this here?  Are you going to Aunt Cindy’s for Gina’s birthday party?  I will bring the macaroni salad.  Love, Mom");

console.log("boomer detected:", isBoomer)
```

If you find a problem please [open an issue](https://github.com/aphexddb/boomerdetector/issues).