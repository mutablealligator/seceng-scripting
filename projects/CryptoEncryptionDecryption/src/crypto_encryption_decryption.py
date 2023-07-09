from Crypto.Cipher import AES
from Crypto.Random import get_random_bytes

dataToBeEncrypted = b"This is a secret message"

key = get_random_bytes(16)

def encrypt(data, key):
    cipher = AES.new(key, AES.MODE_GCM)
    ciphertext, tag = cipher.encrypt_and_digest(dataToBeEncrypted)
    nonce = cipher.nonce
    print("key: {} nonce: {}"), key, nonce

def decrypt(data, key):
    cipher = AES.new(key, AES.MODE_GCM)
    plaintext = cipher.decrypt_and_verify(ciphertext, tag)
    print "plaintext: {}" plaintext"