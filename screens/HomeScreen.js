import { useFocusEffect, useNavigation } from "@react-navigation/native";
import React, { useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  Pressable,
  ScrollView,
  TouchableOpacity,
  BackHandler,
  Animated,
  Easing,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Ionicons } from '@expo/vector-icons';
import { Modal } from "react-native";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = React.useState("");
  const [showModal, setShowModal] = useState(false);
  const [fadeAnim] = useState(new Animated.Value(0));
  const [filteredAuthors, setFilteredAuthors] = useState([]);
  const handleSearch = (text) => {
    if (text === "") {
      setFilteredAuthors([]);
    } else {
      const filtered = allAuthors.filter(
        (author) =>
          author.name.toLowerCase().includes(text.toLowerCase()) ||
          author.author.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredAuthors(filtered);
    }
  };
  const handleNavigateToPopularBooks = () => {
    // Navigate to the "pop.js" file and pass the "Topauthors" array as a parameter
    navigation.navigate("pop", { Topauthors });
  };
  const clearSearch = () => {
    setSearchQuery("");
    setFilteredAuthors([]);
  };
  useFocusEffect(
    React.useCallback(() => {
        const onBackPress = () => {
            setShowModal(true);
            return true; // Prevent default back button behavior
        };

        BackHandler.addEventListener("hardwareBackPress", onBackPress);

        return () => BackHandler.removeEventListener("hardwareBackPress", onBackPress);
    }, [])
);
const fadeIn = () => {
  // Will change fadeAnim value to 1 in 2 seconds
  Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      easing: Easing.linear,
      useNativeDriver: true,
  }).start();
};

const fadeOut = () => {
  // Will change fadeAnim value to 0 in 2 seconds
  Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 2000,
      easing: Easing.linear,
      useNativeDriver: true,
  }).start();
};

  const allAuthors = [
    {
      link: "https://thedailyguardian.com/wp-content/uploads/2024/02/Untitled-design-5-7.jpg",
      name: "Ek Samandar, Mere Andar",
      rating: 4.5,
      author: "Sanjeev Joshi",
    },
    {
      link: "https://www.scientiabooks.in/wp-content/uploads/2021/08/6801-POLITICAL-HISTORY-OF-ASSAM-VOLUME-1-EDITOR-H.-K.-BARPUJARI.jpg",
      name: "Political History of Assam (1947-1971) – Volume 1",
      rating: 4.0,
      author: "Dr. Rajen Saikia",
    },
    {
      link: "https://pictures.abebooks.com/isbn/9789356404076-us.jpg",
      name: "Gandhi: A Life in Three Campaigns",
      rating: 4.8,
      author: "M.J. Akbar and K Natwar Singh",
    },
    {
      link: "https://m.media-amazon.com/images/I/51PxUSmU-iL._SY445_SX342_.jpg",
      name: "Four Stars of Destiny",
      rating: 3.9,
      author: "General Manoj Mukund Naravane",
    },
    {
      link: "https://assets.telegraphindia.com/telegraph/2023/Jan/1673695611_read.jpg",
      name: "Irrfan Khan: A Life in Movies",
      rating: 4.1,
      author: "Shubhra Gupta",
    },
    {
      link: "https://images-na.ssl-images-amazon.com/images/I/91ROiiCSwrL.jpg",
      name: "Redwall",
      rating: 4.2,
      author: "Brian Jacques",
    },
    {
      link: "https://prehistoricpulp.com/wp-content/uploads/2017/08/journeycenterearth.jpg?w=672",
      name: " Journey to the Center of the Earth(1864)",
      rating: 4.0,
      author: "Jules Verne",
    },
    {
      link: "https://d28hgpri8am2if.cloudfront.net/book_images/cvr9781451673319_9781451673319_hr.jpg",
      name: "Fahrenheit 451",
      rating: 3.8,
      author: "Ray Bradbury",
    },
    {
      link: "https://d28hgpri8am2if.cloudfront.net/book_images/cvr9781416500292_9781416500292_hr.jpg",
      name: "Treasure Island",
      rating: 4.3,
      author: "General Manoj Mukund Naravane",
    },
    {
      link: "https://images.thenile.io/r1000/9780008249434.jpg",
      name: " Murder on the Orient Express",
      rating: 4.1,
      author: "Agatha Christie",
    },
    {
      link: "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781501168901/revival-9781501168901_hr.jpg",
      name: "Revival(2014)",
      rating: 4.0,
      author: "Stephen King",
    },
    {
      link: "https://tse1.mm.bing.net/th?id=OIP.l5sdFAhxU8XiZP7zmu46lgHaLW&pid=Api&rs=1&c=1&qlt=95&w=75&h=115",
      name: "gone girl",
      rating: 4.1,
      author: "Gillian Flynn",
    },
    {
      link: "https://www.ourvalleyvoice.com/wp-content/uploads/2014/01/Eleanor-Park-Book.jpg",
      name: "Eleanor & Park",
      rating: 3.1,
      author: "Rainbow Rowell",
    },
    {
      link: "https://media1.popsugar-assets.com/files/thumbor/uVF6QlbaCD9EyK6a-X5dYHVXjjw/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2019/08/05/700/n/40906862/58fb7eece7f386d3_Red_at_the_Bone/i/Red-Bone-Jacqueline-Woodson.jpg",
      name: " Red at The Bone",
      rating: 3.8,
      author: "Jaqueline Woodson",
    },
    {
      link: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1329421639i/50365.jpg",
      name: "A Bridge of Leaves#1, A Suitable Boy",
      rating: 4.2,
      author: "Vikram Seth"
    },
{
  link: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1320398140i/85301.jpg",
  name: "Unaccustomed Earth",
  rating: 3.8,
  author: "Jhumpa Lahiri",
},
{
  link: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1599410785i/785454.jpg",
      name: "Train to Pakistan",
      rating: 4.0,
      author: ("Khushwant Singh ,Arthur Lall"),
},
{
  link: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1679444666i/1774836.jpg",
  name: "The Palace of Illusions",
  rating: 5.0,
  author: "Chitra Banerjee Divakaruni",
},
{
  link: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1500471959i/356824.jpg",
  name: "India After Gandhi: The History of the World's Largest Democracy",
  rating: 5.0,
  author: "Ramachandra Guha",
},
{
  link: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1440041414i/26068796.jpg",
  name: "Restless Days, Sleepless Nights",
  rating: 3.8,
  author: "Jhumpa Lahiri",
},
{
  link: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1358746649i/154126.jpg",
  name: "The Discovery of India",
  rating: 4.0,
  author: ("Jawaharlal Nehru"),
},
{
  link: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1434512695i/25741511.jpg",
  name: "Our Heritage Revisited : A glimpse into Ancient Indian texts",
  rating: 5.0,
  author: "Anju Saha",
},
{
  link: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1348699797i/766930.jpg",
      name: "On the Origin of Species: A Facsimile of the First Edition",
      rating: 4.2,
      author: "Charles Darwin",
},
{
  link: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1515529573i/35820369.jpg",
  name: "The Rise and Fall of the Dinosaurs: A New History of a Lost World",
  rating: 3.8,
  author: "Steve Brusatte",
},
{
  link: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1452452965i/27276428.jpg",
  name: "The Gene: An Intimate History",
  rating: 4.0,
  author: ("Siddhartha Mukherjee"),
},
{
  link: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1333578746i/3869.jpg",
  name: "A Brief History of Time",
  rating: 5.0,
  author: "Stephen Hawking",
},
{
  link: "https://m.media-amazon.com/images/I/515placMpmL._SL500_.jpg",
  name: "The Anarchy",
  rating: 4.2,
  author: "William Dalrymple",
},
{
  link: "https://m.media-amazon.com/images/I/41fbv21fSmL._SL500_.jpg",
      name: ("The Last Heroes"+
      "Foot Soldiers of Indian Freedom"),
      rating: 3.8,
      author: " P Sainath - Journalist & Founder of PARI",
},
{
  link: "https://m.media-amazon.com/images/I/314woplrY2L._SL500_.jpg",
      name: "Indian Philosophy, Vol. 2",
      rating: 4.0,
      author: (" S. Radhakrishnan"),
},
{
  link: "https://m.media-amazon.com/images/I/51013Eu4RhL._SL500_.jpg",
  name: "India's Most Fearless 2 ",
  rating: 5.0,
  author: "Shiv Aroor - Editor & Anchor with India Today TV",
},
{
  link: "https://m.media-amazon.com/images/I/41tAv3Df-IL.jpg",
      name: "Anna Karenina",
      rating: 4.2,
      author: " Leo Tolstoy",
},
{
  link: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1391158399l/512710.jpg",
  name: "North and South",
  rating: 3.8,
  author: "Elizabeth Gaskell",
},
{
  link: "https://m.media-amazon.com/images/I/41yNl3wY6QL.jpg",
  name: "Emma",
  rating: 4.0,
  author: ("Jane Austen"),
},
{
  link: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1514324304l/35012246.jpg",
  name: "The Princess Bride",
  rating: 5.0,
  author: "William Goldman",
}, 
{
  link: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1710337914l/199285128._SY75_.jpg",
  name: "Play Along (Windy City, #4)",
  rating: 4.2,
  author: "Liz Tomforde",
 
},
{
  link: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1697487477i/197392670.jpg",
  name: "The Grandest Game",
  rating: 3.8,
  author: "Jennifer Lynn Barnes",
     },
{
  link: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1707242121i/207293948.jpg",
  name: "Better than the Movies #2"+
  "Nothing Like the Movies",
  rating: 4.0,
  author: ("Lynn Painter"),
 
      },
      {
        link: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1690376898i/182484354.jpg",
        name: "The Cheat Sheet #2"+
        "The Rule Book",
        rating: 5.0,
        author: "Sarah Adams",
        
            },







// Add more authors as needed
  ];

  const Topauthors = [
    {
      link: "https://thedailyguardian.com/wp-content/uploads/2024/02/Untitled-design-5-7.jpg",
      name: "Ek Samandar, Mere Andar",
      rating: 4.5,
      author: "Sanjeev Joshi",
      price:399
    },
    {
      link: "https://www.scientiabooks.in/wp-content/uploads/2021/08/6801-POLITICAL-HISTORY-OF-ASSAM-VOLUME-1-EDITOR-H.-K.-BARPUJARI.jpg",
      name: "Political History of Assam (1947-1971) – Volume 1",
      rating: 4.0,
      author: "Dr. Rajen Saikia",
      price:499,
    },
    {
      link: "https://pictures.abebooks.com/isbn/9789356404076-us.jpg",
      name: "Gandhi: A Life in Three Campaigns",
      rating: 4.8,
      author: "M.J. Akbar and K Natwar Singh",
      price:699,
    },
    {
      link: "https://m.media-amazon.com/images/I/51PxUSmU-iL._SY445_SX342_.jpg",
      name: "Four Stars of Destiny",
      rating: 3.9,
      author: "General Manoj Mukund Naravane",
      price:299,
    },
    {
      link: "https://assets.telegraphindia.com/telegraph/2023/Jan/1673695611_read.jpg",
      name: "Irrfan Khan: A Life in Movies",
      rating: 4.1,
      author: "Shubhra Gupta",
      price:99,
    },
    // Add more authors as needed
  ];
  const recommendedBooks = [
    {
      link: "https://images-na.ssl-images-amazon.com/images/I/91ROiiCSwrL.jpg",
      name: "Redwall",
      rating: 4.2,
      author: "Brian Jacques",
    },
    {
      link: "https://prehistoricpulp.com/wp-content/uploads/2017/08/journeycenterearth.jpg?w=672",
      name: " Journey to the Center of the Earth(1864)",
      rating: 4.0,
      author: "Jules Verne",
    },
    {
      link: "https://d28hgpri8am2if.cloudfront.net/book_images/cvr9781451673319_9781451673319_hr.jpg",
      name: "Fahrenheit 451",
      rating: 3.8,
      author: "Ray Bradbury",
    },
    {
      link: "https://d28hgpri8am2if.cloudfront.net/book_images/cvr9781416500292_9781416500292_hr.jpg",
      name: "Treasure Island",
      rating: 4.3,
      author: "General Manoj Mukund Naravane",
    },
    {
      link: "https://images.thenile.io/r1000/9780008249434.jpg",
      name: " Murder on the Orient Express",
      rating: 4.1,
      author: "Agatha Christie",
    },
    {
      link: " https://tse3.mm.bing.net/th?id=OIP.PpCJQbKzYJJXAaLh0UgxhQHaLf&pid=Api&P=0&h=180",
      name: "Revival(2014)",
      rating: 5.0,
      author: "Stephen King",
    },
    {
      link: "https://tse1.mm.bing.net/th?id=OIP.l5sdFAhxU8XiZP7zmu46lgHaLW&pid=Api&rs=1&c=1&qlt=95&w=75&h=115",
      name: "gone girl",
      rating: 4.1,
      author: "Gillian Flynn",
    },
    {
      link: "https://www.ourvalleyvoice.com/wp-content/uploads/2014/01/Eleanor-Park-Book.jpg",
      name: "Eleanor & Park",
      rating: 3.1,
      author: "Rainbow Rowell",
    },
    {
      link: "https://media1.popsugar-assets.com/files/thumbor/uVF6QlbaCD9EyK6a-X5dYHVXjjw/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2019/08/05/700/n/40906862/58fb7eece7f386d3_Red_at_the_Bone/i/Red-Bone-Jacqueline-Woodson.jpg",
      name: " Red at The Bone",
      rating: 3.8,
      author: "Jaqueline Woodson",
    },

   
    // Add more authors as needed
  ];
  const fictionBooks = [
    {
      link: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1329421639i/50365.jpg",
      name: "A Bridge of Leaves#1, A Suitable Boy",
      rating: 4.2,
      author: "Vikram Seth",
      price:499,
      description:"Vikram Seth's novel is, at its core, a love story: Lata and her mother, Mrs. Rupa Mehra, are both trying to find—through love or through exacting maternal appraisal—a suitable boy for Lata to marry. Set in the early 1950s, in an India newly independent and struggling through a time of crisis, A Suitable Boy takes us into the richly imagined world of four large extended families and spins a compulsively readable tale of their lives and loves. A sweeping panoramic portrait of a complex, multiethnic society in flux, A Suitable Boy remains the story of ordinary people caught up in a web of love and ambition, humor and sadness, prejudice and reconciliation, the most delicate social etiquette and the most appalling violence.",
    },
    {
      link: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1320398140i/85301.jpg",
      name: "Unaccustomed Earth",
      rating: 3.8,
      author: "Jhumpa Lahiri",
      price:599,
      description: (
        "From the internationally best-selling, Pulitzer Prize–winning author, a superbly crafted new work of fiction: eight stories—longer and more emotionally complex than any she has yet written—that take us from Cambridge and Seattle to India and Thailand as they enter the lives of sisters and brothers, fathers and mothers, daughters and sons, friends and lovers. " +
        "In the stunning title story, Ruma, a young mother in a new city, is visited by her father, who carefully tends the earth of her garden, where he and his grandson form a special bond. But he’s harboring a secret from his daughter, a love affair he’s keeping all to himself. In “A Choice of Accommodations,” a husband’s attempt to turn an old friend’s wedding into a romantic getaway weekend with his wife takes a dark, revealing turn as the party lasts deep into the night. In “Only Goodness,” a sister eager to give her younger brother the perfect childhood she never had is overwhelmed by guilt, anguish, and anger when his alcoholism threatens her family. And in “Hema and Kaushik,” a trio of linked stories—a luminous, intensely compelling elegy of life, death, love, and fate—we follow the lives of a girl and boy who, one winter, share a house in Massachusetts. They travel from innocence to experience on separate, sometimes painful paths, until destiny brings them together again years later in Rome. " +
        "Unaccustomed Earth is rich with Jhumpa Lahiri’s signature gifts: exquisite prose, emotional wisdom, and subtle renderings of the most intricate workings of the heart and mind. It is a masterful, dazzling work of a writer at the peak of her powers."
      )    },
    {
      link: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1599410785i/785454.jpg",
      name: "Train to Pakistan",
      rating: 4.0,
      author: ("Khushwant Singh ,Arthur Lall"),
      price:299,
      description: (
        "In the summer of 1947, when the creation of the state of Pakistan was formally announced, ten million people—Muslims and Hindus and Sikhs—were in flight. By the time the monsoon broke, almost a million of them were dead, and all of northern India was in arms, in terror, or in hiding. The only remaining oases of peace were a scatter of little villages lost in the remote reaches of the frontier. One of these villages was Mano Majra."
      )
      
          },
          {
            link: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1679444666i/1774836.jpg",
            name: "The Palace of Illusions",
            rating: 5.0,
            author: "Chitra Banerjee Divakaruni",
            price:799,
            description: (
              "A REIMAGINING OF THE WORLD-FAMOUS INDIAN EPIC, THE MAHABHARAT—TOLD FROM THE POINT OF VIEW OF AN AMAZING WOMAN."+

            " Relevant to today’s war-torn world, The Palace of Illusions takes us back to a time that is half history, half myth, and wholly magical. Narrated by Panchaali, the wife of the legendary Pandavas brothers in the Mahabharat, the novel gives us a new interpretation of this ancient tale."+
              
              "The Palace of Illusions traces the princess Panchaali's life, beginning with her birth in fire and following her spirited balancing act as a woman with five husbands who have been cheated out of their father’s kingdom. Panchaali is swept into their quest to reclaim their birthright, remaining at their side through years of exile and a terrible civil war involving all the important kings of India. Meanwhile, we never lose sight of her strategic duels with her mother-in-law, her complicated friendship with the enigmatic Krishna, or her secret attraction to the mysterious man who is her husbands' most dangerous enemy. Panchaali is a fiery female redefining for us a world of warriors, gods, and the ever-manipulating hands of fate."
              
            )
                },
   
   
    // Add more authors as needed
  ];
  const nonfictionBooks = [
    {
      link: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1500471959i/356824.jpg",
      name: "India After Gandhi: The History of the World's Largest Democracy",
      rating: 5.0,
      author: "Ramachandra Guha",
      price:899,
      description:"A magisterial account of the pains, the struggles, the humiliations, and the glories of the world's largest and least likely democracy, Ramachandra Guha's India After Gandhi is a breathtaking chronicle of the brutal conflicts that have rocked a giant nation and the extraordinary factors that have held it together. An intricately researched and elegantly written epic history peopled with larger-than-life characters, it is the work of a major scholar at the peak of his abilities...",
    },
    {
      link: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1440041414i/26068796.jpg",
      name: "Restless Days, Sleepless Nights",
      rating: 3.8,
      author: "Jhumpa Lahiri",
      price:799,
      description: (
        "RESTLESS DAYS, SLEEPLESS NIGHTS is the story of a woman, in the early 1970’s, who sets out to pursue a career in a public sector bank, an all-male bastion.A must read for every working woman and all the perceptive men who have female colleagues in the work place."
      )    },
    {
      link: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1358746649i/154126.jpg",
      name: "The Discovery of India",
      rating: 4.0,
      author: ("Jawaharlal Nehru"),
      price:599,
      description: (
        "In conjunction with the Jawaharlal Nehru Memorial Fund in New Delhi, Oxford proudly announces the reissue of Glimpses of World History and The Discovery of India, two famous works by Jawaharlal Nehru. One of modern day's most articulate statesmen, Jawaharlal Nehru wrote a on a wide variety of subjects. Describing himself as a dabbler in many things, he committed his life not only to politics but also to nature and wild life, drama, poetry, history, and science, as well as many other fields. These two volumes help to illuminate the depth of his interests and knowledge and the skill and elegance with which he treated the written word!!"
      )
      
          },
          {
            link: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1434512695i/25741511.jpg",
            name: "Our Heritage Revisited : A glimpse into Ancient Indian texts",
            rating: 5.0,
            author: "Anju Saha",
            price:1099,
            description: (
             "Ever wondered what is in the Veds and Upanishads? The terms Shruti, Smriti, Puran, Agam, Nigam, Advait, Vedant philosophy to name a few have been heard – but what exactly are these? This book attempts to bring all of this and more in a quick-read for an overall perspective."+

            " We in India are blessed with a great literary heritage and tremendous cultural, philosophical and traditional wealth. However the contents of ancient Indian scriptures have generally remained an enigma and most of the existing works available to readers, take up for commentary, an individual text for a detailed understanding but an overall picture is not easily available."+
             
             "This book attempts to present a user-friendly description of these texts and their evolutionary account. It is a simple version, meant for someone keen to get an overview of our amazing ancient scriptures but may have found existing books too exhaustive."
              
            )
                },
   
   
    // Add more authors as needed
  ];
  const scienceBooks = [
    {
      link: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1348699797i/766930.jpg",
      name: "On the Origin of Species: A Facsimile of the First Edition",
      rating: 4.2,
      author: "Charles Darwin",
      price:999,
      description:"It is now fully recognized that the publication of Charles Darwin’s Origin of Species in 1859 brought about a revolution in man’s attitude toward life and his own place in the universe. This work is rightly regarded as one of the most important books ever published, and a knowledge of it should be part of the intellectual equipment of every educated person. The book remains surprisingly modern in its assertions and is also remarkably accessible to the layman, much more so than recent treatises necessarily encumbered with technical language and professional jargon. This first edition had a freshness and uncompromising directness that were considerably weakened in later editions, and yet nearly all available reprints of the work are based on the greatly modified sixth edition of 1872. In the only other modern reprinting of the first edition, the pagination was changed, so that it is impossible to give page references to significant passages in the original. Clearly this facsimile reprint of the momentous first edition fills a need for scholars and general readers alike.",
    },
    {
      link: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1515529573i/35820369.jpg",
      name: "The Rise and Fall of the Dinosaurs: A New History of a Lost World",
      rating: 3.8,
      author: "Steve Brusatte",
      price:899,
      description: (
       "The dinosaurs. Sixty-six million years ago, the Earth’s most fearsome creatures vanished. Today they remain one of our planet’s great mysteries. Now The Rise and Fall of the Dinosaurs reveals their extraordinary, 200-million-year-long story as never before."+

       "In this captivating narrative (enlivened with more than seventy original illustrations and photographs), Steve Brusatte, a young American paleontologist who has emerged as one of the foremost stars of the field—naming fifteen new species and leading groundbreaking scientific studies and fieldwork—masterfully tells the complete, surprising, and new history of the dinosaurs, drawing on cutting-edge science to dramatically bring to life their lost world and illuminate their enigmatic origins, spectacular flourishing, astonishing diversity, cataclysmic extinction, and startling living legacy. Captivating and revelatory, The Rise and Fall of the Dinosaurs is a book for the ages."+
       
      " Brusatte traces the evolution of dinosaurs from their inauspicious start as small shadow dwellers—themselves the beneficiaries of a mass extinction caused by volcanic eruptions at the beginning of the Triassic period—into the dominant array of species every wide-eyed child memorizes today, T. rex, Triceratops, Brontosaurus, and more. This gifted scientist and writer re-creates the dinosaurs’ peak during the Jurassic and Cretaceous, when thousands of species thrived, and winged and feathered dinosaurs, the prehistoric ancestors of modern birds, emerged. The story continues to the end of the Cretaceous period, when a giant asteroid or comet struck the planet and nearly every dinosaur species (but not all) died out, in the most extraordinary extinction event in earth’s history, one full of lessons for today as we confront a “sixth extinction."+
       
       "Brusatte also recalls compelling stories from his globe-trotting expeditions during one of the most exciting eras in dinosaur research—which he calls “a new golden age of discovery”—and offers thrilling accounts of some of the remarkable findings he and his colleagues have made, including primitive human-sized tyrannosaurs; monstrous carnivores even larger than T. rex; and paradigm-shifting feathered raptors from China."+
       
       "An electrifying scientific history that unearths the dinosaurs’ epic saga, The Rise and Fall of the Dinosaurs will be a definitive and treasured account for decades to come."
      )    },
    {
      link: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1452452965i/27276428.jpg",
      name: "The Gene: An Intimate History",
      rating: 4.0,
      author: ("Siddhartha Mukherjee"),
      price:1099,
      description: (
       "Spanning the globe and several centuries, The Gene is the story of the quest to decipher the master-code that makes and defines humans, that governs our form and function."+

      " The story of the gene begins in an obscure Augustinian abbey in Moravia in 1856 where a monk stumbles on the idea of a ‘unit of heredity’. It intersects with Darwin’s theory of evolution, and collides with the horrors of Nazi eugenics in the 1940s. The gene transforms post-war biology. It reorganizes our understanding of sexuality, temperament, choice and free will. This is a story driven by human ingenuity and obsessive minds – from Charles Darwin and Gregor Mendel to Francis Crick, James Watson and Rosalind Franklin, and the thousands of scientists still working to understand the code of codes."+
       
      " This is an epic, moving history of a scientific idea coming to life, by the author of The Emperor of All Maladies. But woven through The Gene, like a red line, is also an intimate history – the story of Mukherjee’s own family and its recurring pattern of mental illness, reminding us that genetics is vitally relevant to everyday lives. These concerns reverberate even more urgently today as we learn to “read” and “write” the human genome – unleashing the potential to change the fates and identities of our children."+
       
       "Majestic in its ambition, and unflinching in its honesty, The Gene gives us a definitive account of the fundamental unit of heredity – and a vision of both humanity’s past and future."
      )
      
          },
          {
            link: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1333578746i/3869.jpg",
            name: "A Brief History of Time",
            rating: 5.0,
            author: "Stephen Hawking",
            price:1299,
            description: (
             "A landmark volume in science writing by one of the great minds of our time, Stephen Hawking’s book explores such profound questions as: How did the universe begin—and what made its start possible? Does time always flow forward? Is the universe unending—or are there boundaries? Are there other dimensions in space? What will happen when it all ends?"+

             "Told in language we all can understand, A Brief History of Time plunges into the exotic realms of black holes and quarks, of antimatter and “arrows of time,” of the big bang and a bigger God—where the possibilities are wondrous and unexpected. With exciting images and profound imagination, Stephen Hawking brings us closer to the ultimate secrets at the very heart of creation."
              
            )
                },
   
   
    // Add more authors as needed
  ];
  const historyBooks = [
    {
      link: "https://m.media-amazon.com/images/I/515placMpmL._SL500_.jpg",
      name: "The Anarchy",
      rating: 4.2,
      author: "William Dalrymple",
      price:499,
      description:"Finalist for the Cundill History Prize. ONE OF PRESIDENT BARACK OBAMA'S FAVORITE BOOKS OF THE YEAR. NAMED A BEST BOOK OF THE YEAR BY The Wall Street Journal and NPR. “Superb … A vivid and richly detailed story … worth reading by everyone.” -The New York Times Book Review. From the bestselling author of Return of a King, the story of how the East India Company took over large swaths of Asia, and the devastating results of the corporation running a country."+
      "In August 1765, the East India Company defeated the young Mughal emperor and set up, in his place, a government run by English traders who collected taxes through means of a private army. The creation of this new government marked the moment that the East India Company ceased to be a conventional company and became something much more unusual: an international corporation transformed into an aggressive colonial power. Over the course of the next 47 years, the company's reach grew until almost all of India south of Delhi was effectively ruled from a boardroom in the city of London. The Anarchy tells one of history's most remarkable stories: how the Mughal Empire-which dominated world trade and manufacturing and possessed almost unlimited resources-fell apart and was replaced by a multinational corporation based thousands of miles overseas, and answerable to shareholders, most of whom had never even seen India and no idea about the country whose wealth was providing their dividends. Using previously untapped sources, Dalrymple tells the story of the East India Company as it has never been told before and provides a portrait of the devastating results from the abuse of corporate power. Bronze Medal in the 2020 Arthur Ross Book Award.",
    },
    {
      link: "https://m.media-amazon.com/images/I/41fbv21fSmL._SL500_.jpg",
      name: ("The Last Heroes"+
      "Foot Soldiers of Indian Freedom"),
      rating: 3.8,
      author: " P Sainath - Journalist & Founder of PARI",
      price:599,
      description: (
       "So who really spearheaded India's Freedom Struggle? Millions of ordinary people-farmers, labourers, homemakers, forest produce gatherers, artisans and others-stood up to the British. People who never went on to be ministers, governors, presidents, or hold other high public office. They had this in common: their opposition to Empire was uncompromising. In The Last Heroes, these footsoldiers of Indian freedom tell us their stories. The men, women and children featured in this book are Adivasis, Dalits, OBCs, Brahmins, Muslims, Sikhs and Hindus."+
       "They hail from different regions, speak different languages and include atheists and believers, Leftists, Gandhians and Ambedkarites. The people featured pose the intriguing question: What is freedom? They saw that as going beyond Independence. And almost all of them continued their fight for freedoms long after 1947. The post-1947 generations need their stories. To learn what they understood. That freedom and independence are not the same thing. And to learn to make those come together."
      )    },
    {
      link: "https://m.media-amazon.com/images/I/314woplrY2L._SL500_.jpg",
      name: "Indian Philosophy, Vol. 2",
      rating: 4.0,
      author: (" S. Radhakrishnan"),
      price:299,
      description: (
       "Presents a survey of Hindu thought, focusing on the Vedic and Epic periods."+
       "Recommended for: Philosophy enthusiasts. Beginner to Intermediate readers."
      )
      
          },
          {
            link: "https://m.media-amazon.com/images/I/51013Eu4RhL._SL500_.jpg",
            name: "India's Most Fearless 2 ",
            rating: 5.0,
            author: "Shiv Aroor - Editor & Anchor with India Today TV",
            price:799,
            description: (
            "Untold accounts of the biggest recent anti-terror operations. First-hand reports of the most riveting anti-terror encounters in the wake of the 2016 surgical strikes, the men who hunted terrorists in a magical Kashmir forest where day turns to night, a pair of young Navy men who gave their all to save their entire submarine crew, the Air Force commando who wouldn't sleep until he had avenged his buddies, the tax babu who found his soul in a terrifying Special Forces assault on Pakistani terrorists, and many more. Their own stories, in their own words. Or of those who were with them in their final moments."+
           "The highly anticipated sequel to India's Most Fearless brings you fourteen more stories of astonishing fearlessness,and gets you closer than ever before to the personal braverythat Indian military men display in the line of duty. "
              
            )
                },
   
   
    // Add more authors as needed
  ];
  const romanceBooks = [
    {
      link: "https://m.media-amazon.com/images/I/41tAv3Df-IL.jpg",
      name: "Anna Karenina",
      rating: 4.2,
      author: " Leo Tolstoy",
      price:499,
      description:"A sprawling epic that takes readers across continents in the name of love, Anna Karenina is one of the longest books on this list, coming to an intimidating 800+ pages. But those who persevere with this colossus of a novel are richly rewarded. In what is considered by many to be the best romance novel of all time (and, we think, one of the best books to read in a lifetime), Tolstoy tells the story of an extramarital affair and its fallout in Imperial Russian society.  When Anna runs away with the handsome Count Vronsky, excitement gives way to paranoia, isolation, and regret, as we witness the unravelling of their relationship, and of Anna herself. As much a cautionary tale as it is a romance novel, Anna Karenina is a richly imagined portrait of both the agonies and ecstasies of love.",
    },
    {
      link: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1391158399l/512710.jpg",
      name: "North and South",
      rating: 3.8,
      author: "Elizabeth Gaskell",
      price:599,
      description: (
       "This classic fish-out-of-water tale follows Margaret, a nineteen-year-old girl whose life is turned upside down when her family relocates from a sleepy village to Darkshire — a rough and restless industrial town in the north of England. Margaret finds a new calling, advocating for the poor and disenfranchised, but it brings her into direct conflict with imposing mill owner John Thornton. Can the two find any common ground, or will misunderstanding keep them at odds? Heart-warming and ahead of its time, North and South isn’t just a beautiful romance, it also has a lot to say on politics, gender, and religion, so one for the history buffs, too!"
      )    },
    {
      link: "https://m.media-amazon.com/images/I/41yNl3wY6QL.jpg",
      name: "Emma",
      rating: 4.0,
      author: ("Jane Austen"),
      price:299,
      description: (
        "Austen once set out in a letter the perfect subject for a novel — “Three or four families in a country village” — and the description fits Emma well. The glue that holds these families together (and our beloved heroine) is Emma Woodhouse. Clever, rich, beautiful, and utterly deluded, she’s determined to meddle with the hearts of her neighbours, but sees no need to find a husband herself. The novel bends narration through the distorting lens of our protagonist, making for a genius coming-of-age story and a work of comic brilliance. No matter who plays them, in what adaptation, her characters never fail to be laugh-out-loud funny!"
      )
      
          },
          {
            link: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1514324304l/35012246.jpg",
            name: "The Princess Bride",
            rating: 5.0,
            author: "William Goldman",
            price:799,
            description: (
             "As Goldman himself writes in the introduction, “dollars to donuts you’ve seen the movie”. But if you haven’t read the book that inspired the cult hit, you’ve missed a trick. A spoof fairy tale, a sharp satire, and a rocket-powered fantasy, all brilliantly disguised as a love story — there’s absolutely nothing fluffy about The Princess Bride. In fact, though there’s plenty to giggle about in the story of Buttercup and Prince Humperdink, you might also call this novel a tightly-plotted thriller. So if you’re of a nervous disposition, maybe stick to fairy tales meant for kids. "
              
            )
                },
   
   
    // Add more authors as needed
  ];
  const newarrivals = [
    {
      link: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1710337914l/199285128._SY75_.jpg",
      name: "Play Along (Windy City, #4)",
      rating: 4.2,
      author: "Liz Tomforde",
      price:499,
      expected_publication:"July 11,2024",
      description:"Kennedy"+

      "I’m the only woman on staff for the Windy City Warriors, and after years of putting up with a sexist lead doctor, I’m desperate to land my dream job with a new team next year. All I have to do is maintain my professional reputation for my final season in Chicago."+
      
      "But a Las Vegas run-in with the team’s shortstop threatens it all, leaving me with a fuzzy memory and a ring on my left hand."+
      
      "Now, not only am I legally bound to the most persistent man I’ve ever met, but thanks to Isaiah’s scheme to save my job, I have to pretend the whole thing was a planned elopement and not a drunken mistake."+
      
      "Isaiah Rhodes is reckless, impulsive, and frustratingly charming. He’s also my brand-new husband."+
      
     " They got the saying wrong. What happens in Vegas doesn’t always stay in Vegas… sometimes it follows you right back home."+
      
      
      "Isaiah"+
      
      "As the shortstop for Chicago’s professional baseball team, I’ve had my fair share of fun. But that all ended the day Kennedy Kay became a single woman."+
      
      "I’ve crushed on the team’s athletic trainer for years. I’ve flirted to no avail, so imagine my surprise when I woke up in Sin City with a ring on my finger and my favorite redhead in my bedd"+
      
      "We agree to stay married for one baseball season, just long enough to keep her job safe, but in my mind, I’m using our time together to prove to her I’m husband material"+
      
      "Kennedy might be reluctant to join in on our game, but it’s one I refuse to lose"+
      
      "So come on, wife… play along."
    },
    {
      link: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1514324304l/35012246.jpg",
      name: "The Princess Bride",
      rating: 5.0,
      author: "William Goldman",
      expected_publication:"February 2,2024",
      price:799,
      description: (
       "As Goldman himself writes in the introduction, “dollars to donuts you’ve seen the movie”. But if you haven’t read the book that inspired the cult hit, you’ve missed a trick. A spoof fairy tale, a sharp satire, and a rocket-powered fantasy, all brilliantly disguised as a love story — there’s absolutely nothing fluffy about The Princess Bride. In fact, though there’s plenty to giggle about in the story of Buttercup and Prince Humperdink, you might also call this novel a tightly-plotted thriller. So if you’re of a nervous disposition, maybe stick to fairy tales meant for kids. "
        
      )
          },
    {
      link: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1697487477i/197392670.jpg",
      name: "The Grandest Game",
      rating: 3.8,
      author: "Jennifer Lynn Barnes",
      price:599,
      expected_publication:"July 30,2024",
      description: (
     "Get caught up in the puzzles, games, danger, romance, and riches of this lush new chapter in the #1 bestselling Inheritance Games saga."+

     "Seven tickets. An island of dreams. The chance of a lifetime."+
     
     "Welcome to the Grandest Game, an annual competition run by billionaire Avery Grambs and the four infamous Hawthorne brothers, whose family fortune she inherited. Designed to give anyone a shot at fame and fortune, this year’s game requires one of seven golden tickets to enter. With millions on the line, those seven players will do whatever it takes to win."+
     
     "Some of the players are in it for the money. Some for power. Some for reasons all their own. Every single one of them has secrets. Amidst it all is Grayson Hawthorne, tasked with a vital role in this year’s game. But as tensions rise and the mind-bending challenges push the players to their limits—physically, mentally, and emotionally—it soon becomes clear that not everyone is playing by the rules."+
     
     "#1 New York Times bestselling author Jennifer Lynn Barnes delivers a brand-new series in the world of The Inheritance Games, where fan-favorite and new characters collide in a game you’ll never forget."+
     
     "Do you have what it takes to play?"
      )    },
    {
      link: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1707242121i/207293948.jpg",
      name: "Better than the Movies #2"+
      "Nothing Like the Movies",
      rating: 4.0,
      author: ("Lynn Painter"),
      price:299,
      expected_publication:"September 24, 2024",
      description: (
        "In this highly anticipated sequel to the New York Times bestselling Better than the Movies, Wes and Liz struggle to balance their feelings for each other with the growing pains of being a college student."+

        "For a few beautiful months, Wes had his dream girl: strong-willed girl-next-door Liz. But right as the two were about to set off to UCLA to start their freshman year together, tragedy struck. Wes was left dealing with the fallout, which ultimately meant losing Liz in the process."+
        
        "Flash forward months and months later and Wes and Liz find themselves in college, together. In a healthier place now, Wes knows he broke Liz’s heart when he ended things, but he is determined to make her fall back in love with him."+
        
        "Wes knows Liz better than anyone, and he has a foolproof plan to win her back with the rom-com worthy big gestures she loves. Only…Liz will have none of it. Wes has to scheme like a rom-com hero to figure out how to see her. Even worse, Liz has a new friend…a guy friend."+
        
        "Still, Wes won’t give up, adapting his clever plans and going hard to get Liz’s attention and win back her affection. But after his best efforts get him nowhere, Wes is left wondering if their relationship is really over for good."
      )
      
          },
          {
            link: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1690376898i/182484354.jpg",
            name: "The Cheat Sheet #2"+
            "The Rule Book",
            rating: 5.0,
            author: "Sarah Adams",
            price:799,
            expected_publication:"April 2, 2024",
            description: (
            "College exes break all the rules when they reunite years later in this enemies-to-lovers, second-chance romance, the highly anticipated companion novel to the viral TikTok sensation The Cheat Sheet."+

            "Nora Mackenzie’s entire career lies in the hands of famous NFL tight end Derek Pender, who happens to be her extremely hot college ex-boyfriend. Nora didn’t end things as gracefully as she could have back then, and now it has come back to haunt her. Derek is her first client as an official full-time sports agent, and he’s holding a grudge."+
            
            "Derek has set his sights on a little friendly revenge. If Nora Mackenzie, the first girl to ever break his heart, wants to be his agent, oh, he’ll let her be his agent. The plan is simple: make Nora’s life absolutely miserable. But if Derek knows anything about the woman he once loved—she won’t quit easily."+
            
            "Instead of giving in, Nora starts a scheme of her own. But then a wild night in Vegas leads to Nora and Derek in bed the next morning married. With their rule book out the window, could this new relationship save their careers and spark the romance of a lifetime?"
              
            )
                },
   
   
    // Add more authors as needed
  ];

  return (
    <ScrollView style={styles.container}>
    {/* Header */}
    <View style={styles.header}>
      <Image
        source={{
          uri: "https://tse1.mm.bing.net/th?id=OIP.w7JQxowZbrC4QFJlFA9HogHaEW&pid=Api&P=0&h=180",
        }}
        style={styles.logo}
      />
      <Text style={styles.headerTitle}>Library-X</Text>
 
      <TouchableOpacity
        style={styles.profileIcon}
        onPress={() => navigation.navigate("Info")}
      >
        <Text style={styles.profileText}>P</Text>
      </TouchableOpacity>
    </View>


      {/* Search Bar */}
      <View style={styles.searchBar}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          value={searchQuery}
          onChangeText={(text) => {
            setSearchQuery(text);
            handleSearch(text);
          }}
        />
        <TouchableOpacity onPress={clearSearch}>
          <Image
            source={{ uri: "https://tse1.mm.bing.net/th?id=OIP.G6D77q4eL9yD2Y7at67KJgHaHT&pid=Api&P=0&h=180" }}
            style={styles.clearIcon}
          />
        </TouchableOpacity>
      </View>

      {/* Filtered Authors */}
      <ScrollView style={styles.authorsContainer}>
        {filteredAuthors.length > 0 ? (
          filteredAuthors.map((author, index) => (
            <View key={index} style={styles.author}>
              <Image
                source={{ uri: author.link }}
                style={styles.authorImage}
              />
              <ScrollView horizontal style={styles.horizontalScroll}>
                <Text style={styles.authorText}>{author.name}</Text>
              </ScrollView>
            </View>
          ))
        ) : (
          <Text></Text>
        )}
      </ScrollView>




      {/* Featured Banner */}
      <View style={styles.banner}>
        <Image
          source={{
            uri: "https://tse1.mm.bing.net/th?id=OIP.mY9KM6LNFXb5W1as2znePQHaGZ&pid=Api&P=0&h=180",
          }}
          style={styles.bannerImage}
        />
      </View>

      {/* Quick Access Cards */}
      <View style={styles.cardsContainer}>
        <TouchableOpacity style={styles.card}
         onPress={()=>navigation.navigate("Rentdisplay")}
        
        >
          <Text style={styles.cardTitle}>Rented Books</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}
        onPress={()=>navigation.navigate("neew",{newarrivals})}
        
        >
          <Text style={styles.cardTitle}>New Arrivals</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={handleNavigateToPopularBooks}>
          <Text style={styles.cardTitle}>Popular Books</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}
        
        onPress={()=>navigation.navigate("event")}
        >
          <Text style={styles.cardTitle}>Events</Text>
        </TouchableOpacity>
      </View>

      {/* Categories */}
      <View style={styles.section}>
  <Text style={styles.sectionTitle}>Categories(Rentable books)</Text>
  <ScrollView horizontal>
    <TouchableOpacity
      style={styles.category}
      onPress={() => navigation.navigate("fiction", { fictionBooks,nonfictionBooks,scienceBooks,historyBooks,romanceBooks })}
    >
      <Text style={styles.categoryText}>Fiction</Text>
    </TouchableOpacity>

    <TouchableOpacity
      style={styles.category}
      onPress={() => navigation.navigate("nonfic", { fictionBooks,nonfictionBooks,scienceBooks,historyBooks,romanceBooks })}
    >
      <Text style={styles.categoryText}>Non-Fiction</Text>
    </TouchableOpacity>

    <TouchableOpacity
      style={styles.category}
      onPress={() => navigation.navigate("sci", { fictionBooks,nonfictionBooks,scienceBooks,historyBooks,romanceBooks })}
    >
      <Text style={styles.categoryText}>Science</Text>
    </TouchableOpacity>

    <TouchableOpacity
      style={styles.category}
      onPress={() => navigation.navigate("his", { fictionBooks,nonfictionBooks,scienceBooks,historyBooks,romanceBooks })}
    >
      <Text style={styles.categoryText}>History</Text>
    </TouchableOpacity>

    <TouchableOpacity
      style={styles.category}
      onPress={() => navigation.navigate("love",{ fictionBooks,nonfictionBooks,scienceBooks,historyBooks,romanceBooks })}
    >
      <Text style={styles.categoryText}>Romance</Text>
    </TouchableOpacity>
  </ScrollView>
</View>


      {/* Recommended and Top Authors */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Recommended for You</Text>
        {/* Add content for recommended books */}
        <ScrollView horizontal>
          {recommendedBooks.map((author, index) => (
            <View key={index} style={styles.author1}>
              <Image
                source={{ uri: author.link }}
                style={styles.authorImage1}
              />
              <Text>{author.name}</Text>
              <Text>by {author.author}</Text>
              <View style={styles.ratingContainer}>
                {[1, 2, 3, 4, 5].map((i) => (
                  <Icon
                    key={i}
                    name={i <= author.rating ? "star" : "star-o"}
                    size={20}
                    color={i <= author.rating ? "gold" : "gray"}
                  />
                ))}
              </View>
            </View>
          ))}
        </ScrollView>



      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Top Authors</Text>
        <ScrollView horizontal >
          {Topauthors.map((author, index) => (
            <View key={index} style={styles.author1}>
              <Image
                source={{ uri: author.link }}
                style={styles.authorImage1}
              />
              <Text>{author.name}</Text>
              <Text>by {author.author}</Text>
              <View style={styles.ratingContainer}>
                {[1, 2, 3, 4, 5].map((i) => (
                  <Icon
                    key={i}
                    name={i <= author.rating ? "star" : "star-o"}
                    size={20}
                    color={i <= author.rating ? "gold" : "gray"}
                  />
                ))}
              </View>
            </View>
          ))}
        </ScrollView>
      </View>

      {/* Notifications and Alerts */}
     

      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate("About")}>
          <Text style={styles.footerText}>About Us</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Contact")}>
          <Text style={styles.footerText}>Contact</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Privacy")}>
          <Text style={styles.footerText}>Privacy</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Terms")}>
          <Text style={styles.footerText}>Terms</Text>
        </TouchableOpacity>
      </View>
      <Modal
                animationType="slide"
                transparent={true}
                visible={showModal}
                onRequestClose={() => setShowModal(false)}
            >
                <View style={styles.centeredView}>
                <Animated.View
    style={[styles.modalView, { opacity: showModal ? 1 : 0 }]}
>
                        <Text style={styles.modalText}>Are you sure you want to logout?</Text>
                        <View style={styles.buttonContainer}>
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => {
                                    fadeOut();
                                    setTimeout(() => setShowModal(false), 500);
                                }}
                            >
                                <Text style={styles.textStyle}>No</Text>
                            </Pressable>
                            <Pressable
                                style={[styles.button, styles.buttonConfirm]}
                                onPress={() => {
                                    fadeOut();
                                    setTimeout(() => {
                                        setShowModal(false);
                                        navigation.goBack();
                                    }, 500);
                                }}
                            >
                                <Text style={styles.textStyle}>Yes</Text>
                            </Pressable>
                        </View>
                    </Animated.View>
                </View>
            </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: "center",
}
,
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#f8f8f8",
  },
  authorsContainer: {
    maxHeight: 200, // Set a maximum height for the scrollable area
  },
  logo: {
    width: 50,
    height: 50,
    marginTop: 20,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
     // Semi-transparent background
},
button: {
  borderRadius: 6,
  paddingVertical: 12,
  paddingHorizontal: 20,
  elevation: 2,
  marginHorizontal: 20, // Add horizontal margin between buttons
},
buttonClose: {
  backgroundColor: "#2196F3",
  marginHorizontal: 10,
},
buttonConfirm: {
  backgroundColor: "#FF6347",
  marginHorizontal: 10,
},
textStyle: {
  color: "white",
  fontWeight: "bold",
  textAlign: "center",
  marginHorizontal: 10,
},
modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2
    },
    marginHorizontal: 10,
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
},

  clearIcon: {
    width: 25, // Adjusted size
    height: 25, // Adjusted size
  },
  ratingContainer: {
    flexDirection: "row",
    marginTop: 5,
  },
  author1: {
    marginRight: 10,
    marginTop: 20,
    alignItems: "center",
  },
  horizontalScroll: {
    maxWidth: "100%", // Ensure it doesn't exceed screen width
  },
  authorImage1: {
    width: 100,
    height: 150,
    marginBottom: 5,
    borderRadius: 5,
  },
  
  headerTitle: {
    flex: 1,
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
  },
  profileIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#ddd",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  profileText: {
    fontSize: 18,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#ccc",
    borderWidth: 5,
    borderRadius: 5,
    paddingLeft: 8,
    paddingRight: 8,
    justifyContent: "space-between", // Align elements horizontally
  },
  searchText: {
    fontSize: 16,
    color: "#999",
  },
  banner: {
    marginTop: 0,
    height: 150,
    backgroundColor: "#ddd",
    justifyContent: "center",
    alignItems: "center",
  },
  bannerImage: {
    width: "100%",
    height: "100%",
  },
  cardsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    padding: 10,
  },
  card: {
    width: "45%",
    height: 100,
    backgroundColor: "#f5f5f5",
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  section: {
    padding: 10,
    marginTop: 5,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  category: {
    width: 100,
    height: 100,
    backgroundColor: "#f5f5f5",
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  categoryText: {
    fontSize: 16,
  },
  author: {
    flexDirection: "row", // Align items in a row
    alignItems: "center", // Center items vertically
    marginBottom: 10, // Add space between each book logo and name
  },
  authorImage: {
    width: 40, // Set a fixed width for the author image
    height: 40, // Set a fixed height for the author image
    borderRadius: 20, // Make the image circular
  },
  authorText: {
    marginLeft: 10, // Add space between the book logo and its name
  },
  footer: {
    padding: 10,
    backgroundColor: "#f8f8f8",
    alignItems: "center",
  },
  authorsContainer: {
    padding: 10,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  searchInput: {
    flex: 1,
    height: 40,
  },
  footerText: {
    fontSize: 14,
    color: "#666",
  },
});

export default HomeScreen;
