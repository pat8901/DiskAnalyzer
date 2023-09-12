import React, { useState } from 'react'
import { FaSistrix } from 'react-icons/fa6'
import './SearchBar.css'

export const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState('')
  const users = ['joe', 'jeff', 'pat', 'tim', 'sam', 'bill', 'ash']
  const pi_users = ['Patrick Joseph Flynn', 'Steven A Corcelli', 'Paola Crippa', 'Brian M Baker', 'Michael Pfrender', 'Walter J Scheirer', 'Jeffrey Feder', 'Jonathan Whitmer', 'Paul Raymond Brenner', 'Christopher Fruehwirth', 'Edward Maginn', 'Jonathan MacArt', 'Ashley Parkinson Thrall', 'Nora J Besansky', 'Center for ShockWave Processing', 'Adam Maciej Czajka', 'Paul H Schultz', 'Jonathan D Hauenstein', 'David Chiang', 'Yuhsin Tsai', 'Kevin W Bowyer', 'Michael Wiescher', 'Kirk Bennett Doran', 'Olaf Wiest', 'Grant Mathews', 'William Frederich Schneider', 'Danny Chen', 'Diogo Bolster', 'Elizabeth A Archie', 'Manoel Jacques Couder', 'Meng Jiang', 'Jeremiah Zartman', 'Nathan Swenson', 'Joannes Westerink', 'Jun Li', 'Michael Niemier', 'Yamil Javier Colon', 'David Hyde', 'Anna Maria Simon', 'Ian Carmichael', 'Rebecca Surman', 'Timothy C Beers', 'Nitesh Vijay Chawla', 'Aleksandar Jemcov', 'Harindra J Fernando', 'Nicholas Zabaras', 'Ani Aprahamian', 'Matthew Maurice Champion', 'Jeffrey W Peng', 'Tan Ahn', 'Siddharth Joshi', 'Kasturi Haldar', 'J Daniel Gezelter', 'Sharon Hu', 'Chaoli Wang', 'Mary Ann McDowell', 'Alan Huebner', 'Jane Huang', 'Troy Alexander Perkins', 'Xinxue Qu', 'Yiyu Shi', 'David Richter', 'Lara Arielle Phillips', 'Laurie Littlepage', 'Guangjian Zhang', 'Ahsan Kareem', 'Adam Martin', 'Tengfei Luo', 'Kyle James Bibby', 'James Xavier Sullivan', 'Timothy Weninger', 'Ryan K Roeder', 'Pengjie Gao', 'Daniel W Bardayan', 'John Shim', 'Scott Christopher Morris', 'Dinshaw S Balsara', 'Nathan Scott Rose', 'Daniel J Robertson', 'Douglas L Thain', 'Kevin Lannon', 'Robert Mark Rennie', 'Meng Wang', 'Mark Plecnik', 'Tijana Milenkovic', 'Cristian Koepfli', 'Sharon Stack', 'Christopher Richard Sweet', 'Paul Huber', 'Dong Wang', 'Stuart Jones', 'Michael T Ferdig', 'Maria A Holland', 'Ross Colin Jacobucci', 'Junhui Cai', 'Michael Mcnally', 'Colin P Jessop', 'Bertrand M Hochwald', 'Andrew Brian Kennedy', 'Aaron Striegel', 'Vamsi Krishna Kanuri', 'Alexander W Dowling PhD', 'Neil Lobo', 'Umesh Garg', 'Hope Hollocher', 'Xin Lu', 'Ahmed Abbasi', 'Angana Mukherjee', 'Chen Wang', 'Sophie Anne Shive', 'Taryn Dinkelman', 'Siyuan Zhang', 'Patrick John Fay', 'Justin Crepp', 'Steven Buechler', 'David Phillips', 'David Michael Medvigy', 'Vijay Gupta', 'Julian Torres Dowdall', 'Katharine White', 'Jason Stifler McLachlan', 'Satya Venkata Ravi Sriram Soman', 'John Lalor', 'Taeho Jung', 'Eric L Morgan', 'Ethan Lieber', 'Wolfgang Porod', 'Yang Yang', 'Kasey S Buckles', 'Morten R Eskildsen', 'Yongtao Zhang', 'Boldizsar Janko', 'Lijuan Wang', 'Jaroslaw Nabrzyski', 'Daniele Schiavazzi', 'David Batten Go', 'Karel Matous', 'Jeffrey S Schorey', 'David Burghoff', 'Dan Kelly', 'Stefano Pegoraro', 'Krupali Arun Uplekar', 'Thomas C Corke', 'Zhiyong Zhang', 'Jeffrey Chilcote', 'Yi-Ting Hsu', 'Jessica Ann Brown', 'Meenal Datta', 'Christopher Patzke', 'Athanasia Demetra Panopoulos', 'Daniel Michael Hungerman', 'Michael Anthony Villano', 'Maxime Brodeur', 'Shahriar Mobashery', 'holly v goodson', 'Richard Williams', 'Kapil Khandelwal', 'Christiane Baumeister', 'Kevin Thomas Vaughan', 'Nicolas Lehner', 'Christopher J Cronin', 'Margot Fassler', 'Forrest Rule Spence', 'Cesar Sosa Padilla Araujo', 'Mark Caprio', 'Alan Hamlet', 'Xiangliang Zhang', 'Scott Sheridan Howard', 'Glen Niebur', 'Michael Douglas Hildreth', 'Lakshmi Iyer', 'Gary Bernstein', 'Ningyuan Cao', 'Philippe A Collon', 'Johnathan Loudis', 'Patrick Michael Wensing', 'Joanna Cecilia da Silva Santos', 'Fang Liu', 'Patrizio Piraino', 'Robert Collinson', 'David Bruce Watson', 'Abby Cordova', 'Cody Jean Smith', 'Ryan Gerard McClarren', 'Martina Bukac', 'Jason C Hicks', 'Yong Lee', 'Yahya Kurama', 'Tracy Kijewski', 'Eric Jumper', 'Marinho Angelo Bertanha', 'Zhi Da', 'Stefano Castruccio', 'James Ng', 'Diego Gomez-Zara', 'Eva Dziadula', 'Ying Cheng', 'Zhiliang Xu', 'Ragnar Stroberg', 'Alexandros A Taflanidis', 'Peter M Garnavich', 'KeHai Yuan', 'Richard Taylor', 'Eric Russell Sims', 'Matthew Joseph Zahr', 'William Evans', 'Richard J deBoer', 'Lauren Weiss', 'Jianxun Wang', 'Rebecca Whelan', 'Anthony Serianni', 'Joonhyuk Yang', 'John Ott', 'Zachary Stangebye', 'Evan Kirby', 'Dervis Can Vural', 'Gregory Snider', 'Mark Berends', 'Martin Barron', 'S Alex Kandel', 'Guosheng Fu', 'Wanpeng Tan', 'James Robert Brockmole', 'Suman Datta', 'Seth N Brown', 'Zoltan Toroczkai', 'A Nilesh Fernando', 'Francis BilsonDarku', 'Daren Wang', 'Ruediger Bachmann', 'Mark Suhovecky', 'Peter Wiest Kelly', 'Seth A Berry', 'Emily Yuan Tsui', 'Mathew A Chrystal', 'Benjamin Pugsley', 'Chloe Gibbs', 'Donna Glowacki', 'Vlad Mihai Iluc', 'Hirotaka Sakaue', 'Michael Rupley JR', 'Joseph Paul Kaboski', 'Jonathan Chisum', 'William Carbonaro', 'Blake Leyerle', 'Mitchell Wayne', 'Joseph Otousa', 'Bei Hu', 'Edward Kinzel', 'Peter Easton', 'Frank Castellino', 'Hai Lin', 'Yasemin Ozkan Aydin', 'Joshua D Cameron', 'Maria Macia', 'Jiajun Li', 'Thomas Gregory Pratt', 'Michael John Coppedge', 'Sarah Anne Mustillo', 'Gary Goertz', 'Jeanne RomeroSeverson', 'Ramzi Bualuan', 'Hsing-ta Chen', 'Katherine Walden', 'John William Goodwine Jr', 'Ronald Metoyer', 'Dong Quan Ngoc Nguyen', 'Matthias Hoelzlein', 'Nelson Mark', 'Justin Mark Luningham', 'Christian Hughes', 'Robert Jason Rosenbaum', 'Xiufan Yu', 'Brian S J Blagg', 'Zifeng Zhao', 'Ann Tenbrunsel', 'Robert Easley', 'Anthony James Hoffman', 'MaryGeraldine Navoa Svarovsky', 'Antonio Delgado', 'Hsuehchia Chang', 'Gregory Timp', 'JNicholas Laneman', 'Marc Osherson', 'Jay Christopher Howk PhD', 'Stephen Yelderman', 'Timothy C Ovaert', 'Fanny Ye', 'Bradley Smith', 'Rick Johnson', 'Graham Peaslee', 'Peter James Bui', 'Thomas E Fuja', 'Kenneth Kelley III', 'Yixing Chen', 'Shaun Wook Lee', 'Flint Thomas', 'Donald Alan Brower', 'Natalie K Munn', 'Ken Sauer', 'Jeffrey Campbell', 'Patrick Brewick', 'Merlin Bruening', 'Victoria Woodard', 'Joshua Shrout PhD', 'Alexandre Sezgeevich Moukasian', 'Lei Liu', 'Margaret Schwarz', 'Jessica Morales', 'David Galvin', 'Sylwia Ptasinska', 'Joseph M. Powers', 'Roxana Smarandache', 'Jay Brockman', 'Jennifer Schaefer', 'Matthew Charles Bloom', 'Michael Lemmon', 'Eric Riedl', 'Thomas Juliano', 'Alan C Seabaugh', 'Patricia L Clark', 'Stephen Jonathan Crass', 'Jeffrey Harden', 'Keith Wayne Davis', 'Peter Kogge', 'Alan Euan Lindsay', 'Nosang Myung', 'Jonathan Sapirstein', 'Benjamin Radcliff', 'Stanislav Gordeyev', 'Lizhen Lin', 'Donny Hanjaya Putra', 'Ian Bentley', 'Robert Stevenson', 'William Anthony Phillip', 'Felipe Santiago Tirado', 'Milind Saraph', 'Changbo Zhu', 'David Sikkink', 'Theodore Beauchaine', 'Abigail Ocobock', 'Marya Lieberman', 'Jeffrey Allan Diller', 'Craig Lent', 'Samuel Evens', 'Sarah Kroeger', 'Luis Felipe Rosado Murillo', 'Juan Del Valle', 'Joseph Freeland', 'Matthew Learoyd Sisk', 'Pinar Zorlutuna', 'Thomas Mustillo', 'Cindy Bergeman', 'Michele Muller-Itten', 'Jing Wu', 'Dae Kun Kwon', 'Sergey Leonov', 'Aktar Ali', 'Susanne Wengle', 'Robert Nerenberg', 'Jason Rohr', 'Xiaolong Liu', 'Timothy David Hubbard', 'Adam Jaffe', 'Scott Kirner', 'Felix Janda', 'Peter Burns', 'Matthew Morrison', 'Michael Gekhtman', 'Arnaldo Luis Serrano', 'Paul Bohn', 'Doug Hall', 'Christopher Hinkle', 'Bill D McDonald', 'Thomas OSullivan', 'Elliott Thomas Visconsi', 'Karla Badillo-Urquiola', 'Yanliang Zhang', 'Kaliprasad Rath', 'Erin McDonnell', 'Mary Batistich', 'Marc Francois Muller', 'Shane Corwin', 'Christian Smith', 'Xuemin NA Lu', 'Sunny Boyd', 'Yazen Khasawneh', 'Brittany Morgan', 'Daewon Sun', 'Will E. Bruckert', 'Jane Ryngaert', 'Michael Jason Pries', 'Gabriel Burks', 'Michel Hockx', 'David Boone', 'John M. LoSecco', 'Xuying Zhao', 'Yu Xiao', 'Alexandra Jilkine', 'Jeremy Ben Fein', 'Daniel Johnson', 'Drew Creal', 'Kristin Valentino Diehl', 'Amy Hixon', 'Manuel Alejandro Estefan Davila', 'Meredith Chesson', 'Lee Anna Clark', 'David Hachen', 'Rory McVeigh', 'Jon Coleman', 'Curtis Franks', 'Daniel K Lapsley', 'Carolina Avendano', 'Claudia Polini', 'Shreya Kumar', 'Martin Haenggi', 'Alvaro Acosta Serrano', 'Badih Assaf', 'Zach Schafer', 'Sarah Chapman VanHouten', 'Alexandra Kjuchukova', 'Adrian V Rocha', 'Dafei Jin', 'Davin Raiha', 'George Alex Ambrose', 'Guillermo Trejo', 'Jennifer Leah Tank', 'Kyle Doudrick', 'Lyn Spillman', 'Mark Joseph Behrens', 'Masaru K Kuno', 'Orlando Carter Snead', 'Peter Bauer', 'Patricia A Champion', 'Paul Perrin', 'Suzanne Shanahan', 'Stephan Stolz', 'Tracy Weber', 'oit ( acgen )', 'Ben Matthies', 'Sharif Nijim', 'Brady Russo', 'Jay LaVerne', 'Jun Yang', 'AD Test Account', 'AD Test Account', 'Collin McMillan', 'Edwin Huang', 'Thomas Joseph Loughran', 'Aaron Dingler', 'Christopher Frank Kolda', 'Iossif Lozovatsky', 'Robert Battalio', 'Slavi Sevov', 'Alexei Orlov', 'Adrienne Sabety', 'Aidan Seale-Feldman', 'Brooke Ammerman', 'Brian Fogarty', 'Benjamin Golez', 'Crislyn DSouzaSchorey', 'Office of the Registrar', 'Cheryl S Smith', 'Christina Wolbrecht', 'David Edward Campbell', 'David T Leighton Jr', 'David Jude Veselik', 'Edward Mark Cummings', 'Emily Johnson', 'Evan Mast', 'Giles Duffield', 'Gregory Hartland', 'Gary Lamberti', 'Geoffrey Layman', 'Yihfang Huang', 'Jeffrey Bergstrand', 'Jon Philip Camden', 'Jesse Lander', 'Joel Mittleman', 'Jessica Payne', 'James Patrick Schmiedeler', 'Kraig Beyerlein', 'Kate Elizabeth Mueller', 'Kai Ni', 'Kathy Phillips', 'Laura Fields', 'Liviu Nicolaescu', 'Michael Joseph Chapple', 'Matthew J Gursky', 'Michael Joseph Mannor', 'Mitchell Charles Olsen', 'Molly Scheel', 'Panos Antsaklis', 'Paul Helquist', 'Ruilan Guo', 'Rebecca Ann Wingert', 'Roger Woodard', 'Stefan Frauendorf', 'Scott Mainwaring', 'Swapnil Motghare', 'Viva Bartkus']


  // fetching the data and filtering on the frontend. usually you filter on the backend no the front
  const fetchData = value => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(responce => responce.json())
      .then(json => {
        const results = json.filter(user => {
          return (
            value &&
            user &&
            user.name &&
            user.name.toLowerCase().includes(value)
          )
        })
        setResults(results)
      })
  }

  const fetchFlaskData = value => {
    fetch('http://localhost:5000/users')
      .then(responce => responce.json())
      .then(json => {
        const results = json.filter(user => {
          return (
            value &&
            user &&
            user.name &&
            user.name.toLowerCase().includes(value)
          )
        })
        setResults(results)
      })
  }

  const fetchEstablishedData = value => {
    const filteredItems = pi_users.filter(user => {
      return value && user.toLowerCase().includes(value)
    })
    setResults(filteredItems)
  }

  const handleChange = value => {
    setInput(value)
    fetchEstablishedData(value)
  }

  return (
    <div className='searcher'>
      <FaSistrix id='search-icon' />
      <input
        placeholder='Enter Netid'
        className='input'
        value={input}
        onChange={e => handleChange(e.target.value)}
      ></input>
    </div>
  )
}
