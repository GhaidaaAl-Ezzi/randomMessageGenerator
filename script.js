function generate(){
    var quotes={
"-Prophet Muhammad":'"Feed the hungry, Visit the sick, Set free captives."',
"-Prophet Muhammad":'"Leave me as I leave you, for the people who were before you were ruined because their questions and their differences over the prophets. So, if I forbid you to do something, then keep away from it. And if I order you to do something, then do of it as much as you can"',
"-Prophet Muhammad":'"All pious believers shall deem it their bounden duty to defend believers and to aid them wheresoever’s they may be, whether far or near, and throughout Christendom shall protect the places where they conduct worship and those where their monks and priests dwell"',
"-Prophet Muhammad":'If Christian women enter a Muslim household, she shall be received with kindness, and she shall be given opportunity to pray in her church; there shall be no dispute between her and a man who loves her religion',
"-Abo Bakr":'"When knowledge is limited - it leads to folly... When knowledge exceeds a certain limit, it leads to exploitation."',
"-Abo Bakr":'"It is a matter of shame that in the morning the birds should be awake earlier than you"',
"-Abo Bakr":'"The greatest truth is honesty,and the greatest falsehood is dishonesty"',
"-Umar bin Al-Khattab":'"Fear him, whom you hate."',
"-Umar bin Al-Khattab":'"What regresses, never progresses"',
"-Ummar bin Al-Khattab":'"He who does now know evil will fall into it"',
"Ummar bin Al-Khattab":"'Do not forget your own self while preaching to others.",
"Ali bin Abi Talib":'"Hate no one, no matter how much they have wronged you. Live humbly, no matter how wealthy you become, Think positively, no matter how hard life is. Give much, even if you have been given little. Keep in touch with the ones who have forgotten you, and forgive who has wronged you, and do not stop praying for the best for those you love"',
"Ali bin Abi Talib":'"Body is purified by water. Ego by tears. Inellect is purified by knoweldge. And soul is purified with love"',
"Ali bin Abi Talib":'"Never explain yourself to anyone, because the one who likes you would not need it, and the one dislikes you would not believe it."',
"Ali bin Abi Talib":'"Never make a decision in anger and never make a promise in happiness."'

}
    var authors= Object.keys(quotes);
    var author = authors[Math.floor(Math.random()*authors.length)];
    var quote  = quotes[author];

    document.getElementById("quote").innerHTML=quote;
document.getElementById("author").innerHTML=author;
}
