#!/usr/bin/perl

print <<HTML;
Content-type: text/html

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<title></title>
<meta http-equiv="Content-Type" content="text/html">
<link rel="stylesheet" type="text/css" href="../../css/style.css">
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-1KVM9QVLPT"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-1KVM9QVLPT');
</script> </head>
<body>
<table cellspacing="0" cellpadding="0" border="0">
<tr class="subhead" align="Left"><th>Name</th><th>Value</th></tr>
HTML

my $class;

foreach (sort keys %ENV) {
	next unless /^HTTP_|^REQUEST_/;
	$class = ($class ne 'normal')? 'normal': 'alt';
	print <<HTML;
<tr class="$class"><td valign="top">$_</td><td>$ENV{$_}</td></tr>
HTML
}

print <<HTML;
</table>
  <script src="js/main.js"></script>
</body></html>
HTML
