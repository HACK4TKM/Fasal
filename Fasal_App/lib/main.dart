import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';

import "pages/pages.dart";

void main() async {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Fasal',
      theme: ThemeData(
        dividerColor: Colors.transparent,
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.greenAccent),
        useMaterial3: true,
      ),
      home: const Nav(),
    );
  }
}
