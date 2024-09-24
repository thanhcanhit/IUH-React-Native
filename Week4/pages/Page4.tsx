import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import React, { useState } from 'react';

const Checkbox = ({
  isChecked,
  onChange,
}: {
  isChecked: boolean;
  onChange: () => void;
}) => {
  return (
    <TouchableOpacity onPress={onChange}>
      <View
        style={{
          borderWidth: 2,
          borderRadius: 4,
          width: 30,
          height: 30,
          backgroundColor: 'white',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {isChecked && (
          <Image
            style={{ width: 35, height: 35 }}
            source={require('../assets/check.svg')}
          />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default function Page4() {
  const [form, setForm] = useState<{
    length: number;
    lowercase: boolean;
    uppercase: boolean;
    number: boolean;
    special: boolean;
  }>({
    lowercase: false,
    uppercase: false,
    number: false,
    special: false,
    length: 0,
  });
  const [generatePassword, setGeneratePassword] = useState<string>('');

  const handleGeneratePassword = () => {
    const lower = 'abcdefghijklmnopqrstuvwxyz';
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const specials = '!@#$%^&*()_+[]{}|;:,.<>?';

    let characters = '';
    if (form.lowercase) characters += lower;
    if (form.uppercase) characters += upper;
    if (form.number) characters += numbers;
    if (form.special) characters += specials;

    if (characters.length === 0 || form.length < 1) {
      setGeneratePassword('Invalid options');
      return;
    }

    let password = '';
    for (let i = 0; i < form.length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      password += characters[randomIndex];
    }

    setGeneratePassword(password);
  };
  return (
    <View style={styles.container}>
      <View style={styles.app}>
        <Text style={styles.heading}>PASSWORD GENERATOR</Text>

        <TextInput
          style={styles.output}
          editable={false}
          value={generatePassword}
        />

        <View style={styles.form}>
          <View style={styles.formItem}>
            <Text style={styles.label}>Password length</Text>
            <TextInput
              style={styles.input}
              inputMode="decimal"
              maxLength={2}
              value={String(form.length)}
              onChangeText={(value) =>
                setForm((prev) => ({ ...prev, length: Number(value) }))
              }
            />
          </View>
          <View style={styles.formItem}>
            <Text style={styles.label}>Include lower case letters</Text>
            <Checkbox
              isChecked={form.lowercase}
              onChange={() =>
                setForm((prev) => ({ ...prev, lowercase: !prev.lowercase }))
              }
            />
          </View>
          <View style={styles.formItem}>
            <Text style={styles.label}>Include upcase letters</Text>
            <Checkbox
              isChecked={form.uppercase}
              onChange={() =>
                setForm((prev) => ({ ...prev, uppercase: !prev.uppercase }))
              }
            />
          </View>
          <View style={styles.formItem}>
            <Text style={styles.label}>Include number</Text>
            <Checkbox
              isChecked={form.number}
              onChange={() =>
                setForm((prev) => ({ ...prev, number: !prev.number }))
              }
            />
          </View>
          <View style={styles.formItem}>
            <Text style={styles.label}>Include special symbol</Text>
            <Checkbox
              isChecked={form.special}
              onChange={() =>
                setForm((prev) => ({ ...prev, special: !prev.special }))
              }
            />
          </View>
        </View>

        <TouchableOpacity
          style={styles.submitButton}
          onPress={handleGeneratePassword}>
          <Text style={styles.submitButtonText}>Generate password</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    background: 'radial-gradient(#3B3B98, #fff)',
  },

  app: {
    flex: 1,
    backgroundColor: '#23235b',
    padding: 16,
    borderRadius: 12,
  },

  heading: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
  },
  output: {
    backgroundColor: '#151537',
    marginTop: 32,
    paddingVertical: 4,
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
  },

  label: { color: 'white' },

  form: {
    gap: 8,
    marginTop: 24,
  },

  formItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  input: {
    backgroundColor: 'white',
    borderWidth: 1,
    paddingVertical: 4,
    textAlign: 'center',
    width: 40,
  },
  submitButton: {
    backgroundColor: '#3b3b98',
    padding: 12,
    marginTop: 'auto',
    borderRadius: 8,
  },
  submitButtonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'semibold',
  },
});
