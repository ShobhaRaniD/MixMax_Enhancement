module.exports = function(req, res) {

    var data = JSON.parse(req.body.params);
  if (!data) {
    res.status(403 /* Unauthorized */ ).send('Invalid params');
    return;
  }
    var link = "https://maps.google.com?saddr=" + encodeURI(data.origin) + "&daddr=" + encodeURI(data.dest);
	var html = '<a href="' + link + '"><div style="width:400px;height:200px;"><p>From ' + data.origin + ' to ' + data.dest + '</p><br><div><div>' + data.src + '</div></div></div></a>';
    
  res.json({
    body: html
  });
};