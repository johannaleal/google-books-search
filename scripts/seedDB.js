const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/googlebooks"
);

const bookSeed = [
   {
      title: "It's a Set Up",
      authors: [
         "Associate Professor of Sociology Timothy Black",
         "Timothy Black",
         "Sky Keyes"
      ],
      description: "The norms and expectations of father involvement have changed rapidly within one to two generations. Socially and economically marginalized fathers are being exposed to these messages through popular culture and the media",
      image: "http://books.google.com/books/content?id=M_kFEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
      link: "http://books.google.com/books?id=M_kFEAAAQBAJ&dq=shining+inauthor:keyes&hl=&source=gbs_api"
   },
   {
      title: "Gathering Power Through Insight and Love",
      authors: [
         "Ken Keyes",
         "Penny Keyes"
      ],
      description: "An essential companion to the Handbook, this book contains methods and processes based on years of leading personal growth workshops throughout the world. Shows exactly how to develop perception, heartfelt love, and inner peace.",
      image: "http://books.google.com/books/content?id=80blAAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
      link: "http://books.google.com/books?id=80blAAAAMAAJ&dq=shining+inauthor:keyes&hl=&source=gbs_api"
   },
   {
      title: "Marvel's Avengers: The Extinction Key",
      authors: [
         "Greg Keyes"
      ],
      description: "The official prequel to Marvel's Avengers from Marvel, Crystal Dynamics, Eidos Montreal, and Square Enix, with an exclusive adventure that leads into the game itself. The official prequel to the blockbuster action video game Marvel's Avengers, written by bestselling author Greg Keyes. The game is being developed by Crystal Dynamics, Eidos Montréal, Nixxes, and published by Square Enix. It will be released September 4, 2020 for PlayStation 4, Xbox, Stadia, and PC. Captain America, Iron Man, Thor, Black Widow, and the Hulk. Earth's Mightiest Heroes have assembled to face world-class threats whenever and wherever they might appear. They are the AVENGERS. Yet some threats transcend the ages. Centuries ago, a never-before-seen group of heroes gathered as the Avengers of their ancient era to fight the Zodiac, foes who wielded unimaginable arcane energies channeled through a mysterious Key. The resulting battle devastated vast swaths of the planet. The Key was lost and the Zodiac went into hiding, influencing world events from the shadows, waiting for the stars to align to usher in their return. When strange beings exhibiting the traits of the twelve astrological signs appear in the 21st century, the Avengers again answer the call to assemble. But when this modern team of heroes are forced to divide their efforts, each encounter leads to their opponents gaining strength. Once again, the hunt is on for the Extinction Key...and if the Avengers don't find it, our world will be lost.",
      image: "http://books.google.com/books/content?id=BkfCDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
      link: "https://play.google.com/store/books/details?id=BkfCDwAAQBAJ&source=gbs_api"
   },
   {
      title: "Carrie",
      authors: [
         "Stephen King"
      ],
      description: "Stephen King's legendary debut, the bestselling smash hit that put him on the map as one of America's favorite writers 'Gory and horrifying. . . . You can't put it down.' —Chicago Tribune Unpopular at school and subjected to her mother's religious fanaticism at home, Carrie White does not have it easy. But while she may be picked on by her classmates, she has a gift she's kept secret since she was a little girl: she can move things with her mind. Doors lock. Candles fall. Her ability has been both a power and a problem. And when she finds herself the recipient of a sudden act of kindness, Carrie feels like she's finally been given a chance to be normal. She hopes that the nightmare of her classmates vicious taunts is over . . . but an unexpected and cruel prank turns her gift into a weapon of horror so destructive that the town may never recover.",
      image: "http://books.google.com/books/content?id=FNxGvn1SCVMC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
      link: "https://play.google.com/store/books/details?id=FNxGvn1SCVMC&source=gbs_api"
   },
   {
      title: "The Stand",
      authors: [
         "Stephen King"
      ],
      description: "The tie-in edition of the nine-part CBS All Access series starring Whoopi Goldberg, Alexander Skarsgard, and James Marsden. When a man escapes from a biological testing facility, he sets in motion a deadly domino effect, spreading a mutated strain of the flu that will wipe out 99 percent of humanity within a few weeks. The survivors who remain are scared, bewildered, and in need of a leader. Two emerge--Mother Abagail, the benevolent 108-year-old woman who urges them to build a peaceful community in Boulder, Colorado; and Randall Flagg, the nefarious 'Dark Man,' who delights in chaos and violence. As the dark man and the peaceful woman gather power, the survivors will have to choose between them--and ultimately decide the fate of all humanity.",
      image: "http://books.google.com/books/content?id=UbfnTcmkaKkC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
      link: "https://play.google.com/store/books/details?id=UbfnTcmkaKkC&source=gbs_api"
   },
   {
      title: "It",
      authors: [
         "Stephen King"
      ],
      image: "http://books.google.com/books/content?id=V1firQEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
      link: "http://books.google.com/books?id=V1firQEACAAJ&dq=stephen+king&hl=&source=gbs_api"
   },
   {
      title: "The Institute",
      authors: [
         "Stephen King"
      ],
      description: "From #1 New York Times bestselling author Stephen King, the most riveting and unforgettable story of kids confronting evil since It. “This is King at his best” (The St. Louis Post-Dispatch). In the middle of the night, in a house on a quiet street in suburban Minneapolis, intruders silently murder Luke Ellis’s parents and load him into a black SUV. The operation takes less than two minutes. Luke will wake up at The Institute, in a room that looks just like his own, except there’s no window. And outside his door are other doors, behind which are other kids with special talents—telekinesis and telepathy—who got to this place the same way Luke did: Kalisha, Nick, George, Iris, and ten-year-old Avery Dixon. They are all in Front Half. Others, Luke learns, graduated to Back Half, “like the roach motel,” Kalisha says. “You check in, but you don’t check out.” In this most sinister of institutions, the director, Mrs. Sigsby, and her staff are ruthlessly dedicated to extracting from these children the force of their extranormal gifts. There are no scruples here. If you go along, you get tokens for the vending machines. If you don’t, punishment is brutal. As each new victim disappears to Back Half, Luke becomes more and more desperate to get out and get help. But no one has ever escaped from the Institute. As psychically terrifying as Firestarter, and with the spectacular kid power of It, The Institute “is another winner: creepy and touching and horrifyingly believable, all at once” (The Boston Globe).",
      image: "http://books.google.com/books/content?id=iSKGDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
      link: "https://play.google.com/store/books/details?id=iSKGDwAAQBAJ&source=gbs_api"
   },
   {
      title: "1922",
      authors: [
         "Stephen King"
      ],
      description: "The chilling novella featured in Stephen King’s New York Times bestselling collection Full Dark, No Stars, 1922 is about a man who succumbs to the violence within—setting in motion a grisly train of murder and madness. Wilfred James owns eighty acres of farmland in Nebraska that have been in his family for generations. His wife, Arlette, owns an adjoining one hundred acres. She wants to sell her land but if she does, Wilfred will be forced to sell as well. James will do anything to hold onto his farm, and he'll get his son to go along. Betrayal, murder, madness, rats, 1922 is a breathtaking exploration into the dark side of human nature from the great American storyteller Stephen King.",
      image: "http://books.google.com/books/content?id=O8i2DwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      link: "http://books.google.com/books?id=O8i2DwAAQBAJ&dq=stephen+king&hl=&source=gbs_api"
   },
   {
      title: "Elevation",
      authors: [
         "Stephen King"
      ],
      description: "From legendary master storyteller Stephen King, a riveting story about “an ordinary man in an extraordinary condition rising above hatred” (The Washington Post) and bringing the fictional town of Castle Rock, Maine together—a “joyful, uplifting” (Entertainment Weekly) tale about finding common ground despite deep-rooted differences, “the sign of a master elevating his own legendary game yet again” (USA TODAY). Although Scott Carey doesn’t look any different, he’s been steadily losing weight. There are a couple of other odd things, too. He weighs the same in his clothes and out of them, no matter how heavy they are. Scott doesn’t want to be poked and prodded. He mostly just wants someone else to know, and he trusts Doctor Bob Ellis. In the small town of Castle Rock, the setting of many of King’s most iconic stories, Scott is engaged in a low grade—but escalating—battle with the lesbians next door whose dog regularly drops his business on Scott’s lawn. One of the women is friendly; the other, cold as ice. Both are trying to launch a new restaurant, but the people of Castle Rock want no part of a gay married couple, and the place is in trouble. When Scott finally understands the prejudices they face—including his own—he tries to help. Unlikely alliances, the annual foot race, and the mystery of Scott’s affliction bring out the best in people who have indulged the worst in themselves and others. “Written in masterly Stephen King’s signature translucent…this uncharacteristically glimmering fairy tale calls unabashedly for us to rise above our differences” (Booklist, starred review). Elevation is an antidote to our divisive culture, an “elegant whisper of a story” (Kirkus Reviews, starred review), “perfect for any fan of small towns, magic, and the joys and challenges of doing the right thing” (Publishers Weekly, starred review).",
      image: "http://books.google.com/books/content?id=r8q2DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
      link: "http://books.google.com/books?id=r8q2DwAAQBAJ&dq=stephen+king&hl=&source=gbs_api"
   },
   {
      title: "The Colorado Kid",
      authors: [
         "Stephen King"
      ],
      description: "On an island off the coast of Maine, a man is found dead. There's no identification on the body. Only the dogged work of a pair of local newspapermen and a graduate student in forensics turns up any clues. But that's just the beginning of the mystery. Because the more they learn about the man and the baffling circumstances of his death, the less they understand. Was it an impossible crime? Or something stranger still...? No one but Stephen King could tell this story about the darkness at the heart of the unknown and our compulsion to investigate the unexplained. With echoes of Dashiell Hammett's The Maltese Falcon and the work of Graham Greene, one of the world's great storytellers presents a surprising tale that explores the nature of mystery itself...",
      image: "http://books.google.com/books/content?id=Yrp-Eczh_gAC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
      link: "https://play.google.com/store/books/details?id=Yrp-Eczh_gAC&source=gbs_api"
   }
];

db.Book.remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });