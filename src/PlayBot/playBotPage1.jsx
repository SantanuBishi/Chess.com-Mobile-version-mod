import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, Switch } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import DropDownPicker from 'react-native-dropdown-picker';
import WhiteIcon from '../../assets/white.svg';
import BlackIcon from '../../assets/black.svg';
import RandomIcon from '../../assets/random.svg';
import styles from './playBotPage1.styles';
import { allBots, botsByCategory } from '../PlayBot/bots/index';

export default function PlayBotPage1() {
  const navigation = useNavigation();

  const [selectedBotId, setSelectedBotId] = useState(allBots[0]?.id || null);
  const [selectedGameSetting, setSelectedGameSetting] = useState('friendly');
  const [customConfig, setCustomConfig] = useState({
    Hints: true,
    Takebacks: true,
    Analysis: false,
    Threats: false,
    BotChat: true,
    Timer: true,
    Arrow: true,
    MoveHighlights: true,
    Dots: true,
  });
  const [selectedColor, setSelectedColor] = useState('white');
  const [engineStrength, setEngineStrength] = useState(10);

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownItems, setDropdownItems] = useState([
    { label: 'Friendly', value: 'friendly' },
    { label: 'Challenge', value: 'challenge' },
    { label: 'Assisted', value: 'assisted' },
    { label: 'Custom', value: 'custom' },
  ]);

  const selectedBot = allBots.find((bot) => bot.id === selectedBotId);

  const handlePlay = () => {
    const botWithColor = { ...selectedBot, color: selectedColor };
    navigation.navigate('BotMatch', {
      bot: botWithColor,
      mode: selectedGameSetting,
      config: customConfig,
      strength: engineStrength,
    });
  };

  return (
    <View style={styles.container}>
      {/* 🔹 Heading */}
      <View style={styles.headingBlock}>
        <Text style={styles.heading}>Play with Bot</Text>
      </View>

      {/* 🔹 Bot Preview */}
      {selectedBot && (
        <View style={styles.botPreview}>
          <View style={styles.topRow}>
            <Image source={selectedBot.avatar} style={styles.avatar} />
            <View style={styles.infoRow}>
              <Text style={styles.name}>{selectedBot.name}</Text>
              <Text style={styles.rating}>Rating: {selectedBot.rating}</Text>
              <Text style={styles.flag}>Flag: {selectedBot.flag}</Text>
            </View>
          </View>
          {selectedBot.speech && (
            <Text style={styles.speech} numberOfLines={2}>
              “{selectedBot.speech}”
            </Text>
          )}
        </View>
      )}

      {/* 🔹 Bot Grid */}
      <ScrollView style={styles.scrollArea}>
        {botsByCategory.map((category) => (
          <View key={category.title} style={styles.categoryBlock}>
            <Text style={styles.categoryTitle}>{category.title}</Text>
            <View style={styles.botRow}>
              {category.bots.map((bot) => (
                <TouchableOpacity
                  key={bot.id}
                  style={[
                    styles.botCard,
                    selectedBotId === bot.id && styles.selectedBotCard,
                  ]}
                  onPress={() => setSelectedBotId(bot.id)}
                >
                  <Image source={bot.avatar} style={styles.botThumb} />
                  <Text style={styles.botName}>{bot.name}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        ))}
      </ScrollView>

      {/* 🔹 Game Config */}
      <View style={styles.configPanel}>
        <Text style={styles.configTitle}>Game Mode</Text>

        <View style={styles.modeColorRow}>
          <View style={styles.dropdownWrapper}>
            <DropDownPicker
              open={dropdownOpen}
              value={selectedGameSetting}
              items={dropdownItems}
              setOpen={setDropdownOpen}
              setValue={setSelectedGameSetting}
              setItems={setDropdownItems}
              style={styles.dropdown}
              textStyle={{ color: '#fff' }}
              dropDownContainerStyle={styles.dropdownContainer}
              placeholder="Select mode"
              placeholderStyle={{ color: '#999' }}
              zIndex={1000}
              listMode="SCROLLVIEW"
              autoScroll={true}
              closeAfterSelecting={true}
            />
          </View>

          <View style={styles.colorSelectorInline}>
            {['white', 'random', 'black'].map((color) => (
              <TouchableOpacity
                key={color}
                style={[
                  styles.colorButton,
                  selectedColor === color && styles.selectedColor,
                ]}
                onPress={() => setSelectedColor(color)}
              >
                {color === 'white' ? (
                  <WhiteIcon width={32} height={32} />
                ) : color === 'black' ? (
                  <BlackIcon width={32} height={32} />
                ) : (
                  <RandomIcon width={32} height={32} />
                )}
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {selectedGameSetting === 'custom' && (
          <View style={styles.customPanel}>
            {Object.keys(customConfig).map((key) => (
              <View key={key} style={styles.toggleRow}>
                <Text>{key}</Text>
                <Switch
                  value={customConfig[key]}
                  onValueChange={() =>
                    setCustomConfig({
                      ...customConfig,
                      [key]: !customConfig[key],
                    })
                  }
                />
              </View>
            ))}
          </View>
        )}

        <TouchableOpacity style={styles.playButton} onPress={handlePlay}>
          <Text style={styles.playText}>Play</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}