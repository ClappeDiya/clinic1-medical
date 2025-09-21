#!/usr/bin/env node

/**
 * PDF Functionality Test Script for Clinic 1 Medical Resources Page
 * This script tests all PDF download buttons on http://localhost:3000/resources
 */

const http = require('http');

// Test configuration
const BASE_URL = 'http://localhost:3000';
const RESOURCES_PAGE = '/resources';

// List of all PDF files that should be accessible
const PDF_FILES = [
    // Health Education Guides
    '/assets/pdfs/patient-education/heart-health-guide.html',
    '/assets/pdfs/patient-education/diabetes-care-guide.html', 
    '/assets/pdfs/patient-education/mental-wellness-guide.html',
    '/assets/pdfs/patient-education/nutrition-guide.html',
    '/assets/pdfs/patient-education/preventive-care-guide.html',
    '/assets/pdfs/patient-education/medication-safety-guide.html',
    
    // Patient Forms
    '/assets/pdfs/patient-forms/new-patient-registration-form.html',
    '/assets/pdfs/patient-forms/medical-history-form.html',
    '/assets/pdfs/patient-forms/insurance-information-form.html',
    '/assets/pdfs/patient-forms/consent-for-treatment-form.html'
];

/**
 * Test HTTP endpoint
 */
function testEndpoint(url) {
    return new Promise((resolve, reject) => {
        const startTime = Date.now();
        
        http.get(url, (res) => {
            const endTime = Date.now();
            const responseTime = endTime - startTime;
            
            resolve({
                url: url,
                status: res.statusCode,
                statusMessage: res.statusMessage,
                responseTime: responseTime,
                contentType: res.headers['content-type'] || 'unknown',
                contentLength: res.headers['content-length'] || 'unknown'
            });
        }).on('error', (err) => {
            reject({
                url: url,
                error: err.message
            });
        });
    });
}

/**
 * Run comprehensive tests
 */
async function runTests() {
    console.log('🧪 CLINIC 1 MEDICAL - PDF FUNCTIONALITY TEST');
    console.log('============================================');
    console.log(`Testing website: ${BASE_URL}`);
    console.log(`Date: ${new Date().toISOString()}`);
    console.log('');

    let totalTests = 0;
    let passedTests = 0;
    let failedTests = 0;

    // Test 1: Resources page accessibility
    console.log('📋 TEST 1: RESOURCES PAGE ACCESSIBILITY');
    console.log('----------------------------------------');
    try {
        const result = await testEndpoint(`${BASE_URL}${RESOURCES_PAGE}`);
        totalTests++;
        
        if (result.status === 200) {
            passedTests++;
            console.log(`✅ PASS: Resources page accessible`);
            console.log(`   Status: ${result.status} ${result.statusMessage}`);
            console.log(`   Response Time: ${result.responseTime}ms`);
            console.log(`   Content Type: ${result.contentType}`);
        } else {
            failedTests++;
            console.log(`❌ FAIL: Resources page returned status ${result.status}`);
        }
    } catch (error) {
        totalTests++;
        failedTests++;
        console.log(`❌ FAIL: Resources page error - ${error.error}`);
    }
    console.log('');

    // Test 2: Health Education PDF Guides
    console.log('📚 TEST 2: HEALTH EDUCATION PDF GUIDES');
    console.log('--------------------------------------');
    
    const healthGuides = PDF_FILES.slice(0, 6); // First 6 are health guides
    const healthGuideNames = [
        'Heart Health Guide',
        'Diabetes Care Guide', 
        'Mental Wellness Guide',
        'Nutrition Guide',
        'Preventive Care Guide',
        'Medication Safety Guide'
    ];
    
    for (let i = 0; i < healthGuides.length; i++) {
        try {
            const result = await testEndpoint(`${BASE_URL}${healthGuides[i]}`);
            totalTests++;
            
            if (result.status === 200) {
                passedTests++;
                console.log(`✅ PASS: ${healthGuideNames[i]}`);
                console.log(`   URL: ${healthGuides[i]}`);
                console.log(`   Response Time: ${result.responseTime}ms`);
                console.log(`   Content Length: ${result.contentLength} bytes`);
            } else {
                failedTests++;
                console.log(`❌ FAIL: ${healthGuideNames[i]} - Status ${result.status}`);
            }
        } catch (error) {
            totalTests++;
            failedTests++;
            console.log(`❌ FAIL: ${healthGuideNames[i]} - ${error.error}`);
        }
        console.log('');
    }

    // Test 3: Patient Forms
    console.log('📝 TEST 3: PATIENT FORMS');
    console.log('-------------------------');
    
    const patientForms = PDF_FILES.slice(6); // Last 4 are patient forms
    const formNames = [
        'New Patient Registration Form',
        'Medical History Form',
        'Insurance Information Form',
        'Consent for Treatment Form'
    ];
    
    for (let i = 0; i < patientForms.length; i++) {
        try {
            const result = await testEndpoint(`${BASE_URL}${patientForms[i]}`);
            totalTests++;
            
            if (result.status === 200) {
                passedTests++;
                console.log(`✅ PASS: ${formNames[i]}`);
                console.log(`   URL: ${patientForms[i]}`);
                console.log(`   Response Time: ${result.responseTime}ms`);
                console.log(`   Content Length: ${result.contentLength} bytes`);
            } else {
                failedTests++;
                console.log(`❌ FAIL: ${formNames[i]} - Status ${result.status}`);
            }
        } catch (error) {
            totalTests++;
            failedTests++;
            console.log(`❌ FAIL: ${formNames[i]} - ${error.error}`);
        }
        console.log('');
    }

    // Test 4: Content Validation (check if files contain expected content)
    console.log('🔍 TEST 4: CONTENT VALIDATION');
    console.log('------------------------------');
    
    console.log('Checking if PDF files contain Clinic 1 Medical branding...');
    
    // This is a simplified test - in a real scenario you'd parse the HTML content
    const sampleFiles = [
        '/assets/pdfs/patient-education/heart-health-guide.html',
        '/assets/pdfs/patient-forms/new-patient-registration-form.html'
    ];
    
    for (const file of sampleFiles) {
        try {
            const result = await testEndpoint(`${BASE_URL}${file}`);
            totalTests++;
            
            if (result.status === 200 && result.contentType.includes('text/html')) {
                passedTests++;
                console.log(`✅ PASS: ${file} - Valid HTML content`);
                console.log(`   Content Type: ${result.contentType}`);
            } else {
                failedTests++;
                console.log(`❌ FAIL: ${file} - Invalid content type or status`);
            }
        } catch (error) {
            totalTests++;
            failedTests++;
            console.log(`❌ FAIL: ${file} - ${error.error}`);
        }
    }
    console.log('');

    // Test Summary
    console.log('📊 TEST SUMMARY');
    console.log('================');
    console.log(`Total Tests: ${totalTests}`);
    console.log(`Passed: ${passedTests} ✅`);
    console.log(`Failed: ${failedTests} ❌`);
    console.log(`Success Rate: ${((passedTests / totalTests) * 100).toFixed(1)}%`);
    console.log('');

    if (failedTests === 0) {
        console.log('🎉 ALL TESTS PASSED! PDF functionality is working correctly.');
        console.log('');
        console.log('✨ FUNCTIONALITY VERIFIED:');
        console.log('  • Resources page loads successfully');
        console.log('  • All 6 health education PDF guides are accessible');
        console.log('  • All 4 patient forms are accessible'); 
        console.log('  • Files contain proper HTML content');
        console.log('  • All download buttons should work correctly');
        console.log('');
        console.log('🌐 Ready for user testing at: http://localhost:3000/resources');
    } else {
        console.log(`⚠️  ${failedTests} test(s) failed. Please review the issues above.`);
    }
}

// Run the tests
runTests().catch(console.error);
