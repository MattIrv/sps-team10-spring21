async function showlinks() {
  const responseFromServer = await fetch('/discounts');
  const textFromResponse = await responseFromServer.text();

  const linksContainer = document.getElementById('links-container');
linksContainer.innerText = textFromResponse;
  const links =  responseFromServer.json();

  console.log(links.Oreilly,"https://www.oreilly.com/");
  console.log(links.Nova,"http://textbooknova.com");
  console.log(links.eBook,"http://eBookee.org");
  console.log(links.ManyBooks,"http://ManyBooks.net");
  console.log(links.FeedUrBrain,"http://FeedUrBrain.com");
  console.log(links.AllenG,"http://AllenG.ru");
  console.log(links.Ok,"http://2020Ok.com");
  console.log(links.FreeTextBook,"http://FreeTextBooks.com");
  console.log(links.GenLib,"http://gen.lib.rus.ec");
  console.log(links.Gutenberg,"http://Gutenberg.org");
  console.log(links.Eknigu,"http://Eknigu.com");
  console.log(links.Libgen,"http://Libgen.lc");
  console.log(links.BookGuru,"http://bookguru.net");
  console.log(links.ZLib,"http://z-lib.org");



}