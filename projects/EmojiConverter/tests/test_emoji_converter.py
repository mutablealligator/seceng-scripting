from src import emoji_converter

import unittest

class TestEmojiConverter(unittest.TestCase):

    def test_none(self):
        with self.assertRaises(emoji_converter.MessageNoneException):
            emoji_converter.emoji_converter(None)

    def test_happy_message(self):
        self.assertEqual(
            emoji_converter.emoji_converter('I am happy'), 
            'I am 😀'
        )

    def test_sad_message(self):
        self.assertEqual(
            emoji_converter.emoji_converter('I am sad'), 
            'I am 😞'
        )

if __name__ == '__main__':
    unittest.main()