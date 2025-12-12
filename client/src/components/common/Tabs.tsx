import { useState } from 'react';
import { Button } from '@/components/ui/button';
import ChatsView from '@/components/sidebar/sidebar-views/ChatsView';
import CopilotView from '@/components/sidebar/sidebar-views/CopilotView';
import SettingsView from '@/components/sidebar/sidebar-views/SettingsView';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('chat');

  return (
    <div className="w-full">
      <div className="flex border-b border-gray-700">
        <Button onClick={() => setActiveTab('chat')} variant={activeTab === 'chat' ? 'secondary' : 'ghost'} className="flex-1 rounded-none">Chat</Button>
        <Button onClick={() => setActiveTab('copilot')} variant={activeTab === 'copilot' ? 'secondary' : 'ghost'} className="flex-1 rounded-none">Copilot</Button>
        <Button onClick={() => setActiveTab('settings')} variant={activeTab === 'settings' ? 'secondary' : 'ghost'} className="flex-1 rounded-none">Settings</Button>
      </div>
      <div className="p-4">
        {activeTab === 'chat' && <ChatsView />}
        {activeTab === 'copilot' && <CopilotView />}
        {activeTab === 'settings' && <SettingsView />}
      </div>
    </div>
  );
};

export default Tabs;