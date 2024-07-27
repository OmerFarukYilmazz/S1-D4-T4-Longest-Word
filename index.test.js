const getLongestWord = require('./index.js');

describe('Cümledeki en uzun kelime testleri', () => {
  test("'ÖTV matrah artırımı ile arabalar ucuzlayacak' en uzun kelime 'ucuzlayacak' olmalı", () => {
    expect(getLongestWord('ÖTV matrah artırımı ile arabalar ucuzlayacak')).toBe(
      'ucuzlayacak'
    );
  });

  test("'Split metodu ile bir metni kelimelerden oluşan bir array'e dönüştürebilirsin' metninde en uzun kelime 'dönüştürebilirsin' olmalı", () => {
    expect(
      getLongestWord(
        "Split metodu ile bir metni kelimelerden oluşan bir array'e dönüştürebilirsin"
      )
    ).toBe('dönüştürebilirsin');
  });

  test('Boş metin için doğru sonucu dönüyor mu?', () => {
    expect(getLongestWord('')).toBe('');
  });

  test('Fonksiyonun dönüş değeri string mi?', () => {
    const result = getLongestWord('Sprint 1 4. gün konusu diziler');
    expect(typeof result).toBe('string');
  });
});