import React from 'react';
import { NavigationLayout } from './components/NavigationLayout';
import { CiFolderOn } from 'react-icons/ci';
import { Heading } from '@chakra-ui/react';
import { FaRegFolderOpen } from 'react-icons/fa';
import { FileTreeItem } from './components/FileTreeItem';

// Sample array of lecture notes (could come from props or API call)
const lectureFiles = [
  'ericdoods.pdf',
  'oop_intro.pdf',
  'lecturenote_2.pdf',
  'oop_classes.pdf',
  'oop_inheritance.pdf',
  'oop_polymorphism.pdf',
];

export default function LectureNotes() {
  return (
    <NavigationLayout>
      <div className="folderTitle" style={styles.folderTitle}>
        <CiFolderOn size="70px" />
        <Heading style={{ marginLeft: '10px' }}>
          Lecture Notes
        </Heading>
      </div>
      <div className="filesContainer" style={styles.filesContainer}>
        <FaRegFolderOpen
          size="40px"
          style={{
            marginLeft: '30px',
            marginTop: '20px',
            backgroundColor: 'white',
            marginBottom: '8px',
          }}
        />
        <div style={{ display: 'flex', height: 'fit-content' }}>
          <div
            style={{
              width: '100%',
              alignContent: 'center',
              alignItems: 'center',
              height: '100%',
              position: 'relative',
            }}
          >
            {/* Map over the lecture files and render FileTreeItem */}
            {lectureFiles.length > 0 ? (
              lectureFiles.map((fileName, index) => (
                <FileTreeItem key={index} fileName={fileName} />
              ))
            ) : (
              <p>No lecture notes available</p>
            )}
          </div>
        </div>
      </div>
    </NavigationLayout>
  );
}

const styles = {
  folderTitle: {
    display: 'flex',
    alignItems: 'center',
    margin: '20px 0',
  },
  filesContainer: {
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
  },
};
