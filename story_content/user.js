function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6PVAvajIq0t":
        Script1();
        break;
      case "6Jl9STx52ED":
        Script2();
        break;
      case "5XoWLRW2zkG":
        Script3();
        break;
      case "5ux0jtt3GtB":
        Script4();
        break;
      case "6RSPRm1HsJJ":
        Script5();
        break;
      case "6VpUYGcrwLi":
        Script6();
        break;
      case "67lB8VKHLXk":
        Script7();
        break;
      case "6dYYqrSOnuw":
        Script8();
        break;
      case "69sBzBPIrWh":
        Script9();
        break;
      case "6Do2nM8d6Sf":
        Script10();
        break;
      case "632XaDLq9JN":
        Script11();
        break;
      case "6PxZWeOcZCH":
        Script12();
        break;
      case "5bivzET6Afw":
        Script13();
        break;
      case "6YhuPJvsBaT":
        Script14();
        break;
      case "5bVcLd9XVVC":
        Script15();
        break;
      case "5XVSEXGdvLr":
        Script16();
        break;
      case "6B99N4UIq1P":
        Script17();
        break;
      case "6ECPoi6Au3z":
        Script18();
        break;
      case "6EGQhlcRv4T":
        Script19();
        break;
  }
}

function Script1()
{
  //Get Var Pagetitle from Storyline
var player = GetPlayer();
var pagetitle = player.GetVar(“PageTitle”);

//Send PageTitle to Analytics
ga(‘send’, ‘screenview’, {screenName: pagetitle});
}

function Script2()
{
  //Get Var Pagetitle from Storyline
var player = GetPlayer();
var pagetitle = player.GetVar(“PageTitle”);

//Send PageTitle to Analytics
ga(‘send’, ‘screenview’, {screenName: pagetitle});
}

function Script3()
{
  //Get Var Pagetitle from Storyline
var player = GetPlayer();
var pagetitle = player.GetVar(“PageTitle”);

//Send PageTitle to Analytics
ga(‘send’, ‘screenview’, {screenName: pagetitle});
}

function Script4()
{
  ga(‘send’, ‘event’, ‘Button’, ‘click’, ‘Tab 01’);’
}

function Script5()
{
  ga(‘send’, ‘event’, ‘Button’, ‘click’, ‘Tab 02’);’
}

function Script6()
{
  ga(‘send’, ‘event’, ‘Button’, ‘click’, ‘Tab 03’);’
}

function Script7()
{
  ga(‘send’, ‘event’, ‘Question’, ‘incorrect’, ‘Question 1’);


}

function Script8()
{
  ga(‘send’, ‘event’, ‘Question’, ‘correct’, ‘Question 1’);
}

function Script9()
{
  //Get Var Pagetitle from Storyline
var player = GetPlayer();
var pagetitle = player.GetVar(“PageTitle”);

//Send PageTitle to Analytics
ga(‘send’, ‘screenview’, {screenName: pagetitle});
}

function Script10()
{
  //Get Var Pagetitle from Storyline
var player = GetPlayer();
var pagetitle = player.GetVar(“PageTitle”);

//Send PageTitle to Analytics
ga(‘send’, ‘screenview’, {screenName: pagetitle});
}

function Script11()
{
  ga(‘send’, ‘event’, ‘Question’, ‘incorrect’, ‘Question 2’);


}

function Script12()
{
  ga(‘send’, ‘event’, ‘Question’, ‘correct’, ‘Question 2’);


}

function Script13()
{
  //Get Var Pagetitle from Storyline
var player = GetPlayer();
var pagetitle = player.GetVar(“PageTitle”);

//Send PageTitle to Analytics
ga(‘send’, ‘screenview’, {screenName: pagetitle});
}

function Script14()
{
  //Get Var Pagetitle from Storyline
var player = GetPlayer();
var pagetitle = player.GetVar(“PageTitle”);

//Send PageTitle to Analytics
ga(‘send’, ‘screenview’, {screenName: pagetitle});
}

function Script15()
{
  ga(‘send’, ‘event’, ‘Question’, ‘incorrect’, ‘Question 3’);


}

function Script16()
{
  ga(‘send’, ‘event’, ‘Question’, ‘correct’, ‘Question 3’);


}

function Script17()
{
  //Get Var Pagetitle from Storyline
var player = GetPlayer();
var pagetitle = player.GetVar(“PageTitle”);

//Send PageTitle to Analytics
ga(‘send’, ‘screenview’, {screenName: pagetitle});
}

function Script18()
{
  ga(‘send’, ‘event’, ‘Result’, ‘completed’);


}

function Script19()
{
  //Get Var Pagetitle from Storyline
var player = GetPlayer();
var pagetitle = player.GetVar(“PageTitle”);

//Send PageTitle to Analytics
ga(‘send’, ‘screenview’, {screenName: pagetitle});
}

